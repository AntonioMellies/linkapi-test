import axios, { AxiosRequestConfig } from 'axios';
import { AbstractBlingService } from '../abstract.bling.service';
const js2xmlparser = require("js2xmlparser");
const qs = require('qs');

class CreatePedidosBlingService extends AbstractBlingService {

    async create(pedidoJson: any): Promise<any> {
        const pedidoXML = js2xmlparser.parse("pedido", pedidoJson)

        const data = qs.stringify({
            'apikey': this.getToken(),
            'xml': pedidoXML
        });

        const config: AxiosRequestConfig = {
            method: 'post',
            url: this.getUrl('pedido/json'),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios.request(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            }).catch(function (error) {
                console.log(error);
            })

    }
}
export default new CreatePedidosBlingService();
