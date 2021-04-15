import { AbstractJob } from "../../common/abstract.job";
import CreatePedidosBlingService from "../BING/pedidos/create.pedido.bling.service";
import ListDealsPipedriveService from "../PIPEDRIVE/deals/list.deals.pipedrive.service";
import moment from 'moment';
import ListProductsPipedriveService from "../PIPEDRIVE/products/list.products.pipedrive.service";
import OpportunitiesService from "../API/opportunities.service";
import * as cron from 'node-cron'
export class PedidoIntegrateJobService extends AbstractJob {

    constructor(cron: string) {
        super(cron)
    }

    toSchedule(): void {
        console.info('Scehdule PedidoIntegrateJobService')
        try {
            cron.schedule(this.cron, () => { this.execute() }).start();
        } catch (err) {
            console.error(err)
        }
    }

    async execute(): Promise<void> {
        try {
            console.info('Execute PedidoIntegrateJobService')
            const deals = await ListDealsPipedriveService.getDealsWonYesterday();

            for (const deal of deals[0]['deals']) {
                const itens = await ListProductsPipedriveService.getProductsByDeals(deal['id'])
                const pedidoJson = this.createIntegrationPedido(deal, itens)
                CreatePedidosBlingService.create(pedidoJson);
            }
            OpportunitiesService.insertOpportunities(deals[0])
        } catch (err) {
            throw new Error(err);
        }
    }


    createIntegrationPedido(deal: any, itens: any) {
        const pedido = {
            data: moment().format('DD/MM/YYYY').toString(),
            cliente: {
                nome: deal['person_name']
            },
            itens: this.createListItens(itens)
        }
        return pedido;
    }

    createListItens(itens: any) {
        const itensList = [];

        for (const iten of itens) {
            itensList.push({
                'item': {
                    'codigo': iten['product']['code'],
                    'descricao': iten['product']['name'],
                    'qtde': iten['quantity_formatted'],
                    'vlr_unit': iten['item_price']
                }
            })
        }
        return itensList;
    }

}
