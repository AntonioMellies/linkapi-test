import { IPipedriveController } from '../interface.controller.pipidriver';
import { AbstractPipedriveService } from '../abstract.pipedrive.service';
import moment from 'moment';

class ListDealsPipedriveService extends AbstractPipedriveService implements IPipedriveController {

    controller = this.getClient().DealsController;

    async getDealsWonYesterday(): Promise<any> {

        const input: any = [];
        input['startDate'] = moment().subtract(1, 'days').format('YYYY-MM-DD').toString();
        input['interval'] = 'day';
        input['amount'] = 1;
        input['fieldKey'] = 'won_time';
        input['excludeDeals'] = 0;

        /*
            Tratative to error in Deals Controller 
            Not converting correctly model on api return
            
            parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetDealsTimeline');
            _callback(null, parsed, _context);
            _fulfill(parsed);
        */
        let deals;
        await this.controller.getDealsTimeline(input, (err: any, resp: any, context: any) => {
            if (err) {
                throw new Error(err);
            }
            const body = JSON.parse(context.response.body);
            deals = body['data'];
        })
        return deals;
    }
}
export default new ListDealsPipedriveService();
