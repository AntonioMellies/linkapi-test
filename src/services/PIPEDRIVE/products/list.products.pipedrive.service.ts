import { IPipedriveController } from '../interface.controller.pipidriver';
import { AbstractPipedriveService } from '../abstract.pipedrive.service';

class ListProductsPipedriveService extends AbstractPipedriveService implements IPipedriveController {

    controller = this.getClient().DealsController;

    async getProductsByDeals(idDeal: string): Promise<any> {

        const input: any = [];
        input['id'] = idDeal;
        input['includeProductData'] = 1;

        const itens = await this.controller.listProductsAttachedToADeal(input)
        return itens['data']
    }
}
export default new ListProductsPipedriveService();
