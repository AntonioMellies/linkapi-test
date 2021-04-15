import moment from 'moment';
import { NextFunction, Request, Response } from "express";
import OpportunitiesRepository from '../../repositories/opportunities.repository';
class OpportunitiesService {

    async findAllResumeOpportunities(req: Request, resp: Response, next: NextFunction) {
        const opportunities = await OpportunitiesRepository.model.find({}, 'date totals')
        resp.json(opportunities)
        next()
    }

    async insertOpportunities(deals: any) {
        const oportunidades = {
            date: moment().toDate(),
            deals: deals['deals'],
            totals: deals['totals']
        }
        OpportunitiesRepository.model.create(oportunidades).catch((err) => console.error(err));
    }

}
export default new OpportunitiesService();