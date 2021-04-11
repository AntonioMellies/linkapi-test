import { NextFunction, Request, Response } from "express";
import DealsPipedriveService from "../PIPEDRIVE/deals.pipedrive.service";

class OpportunitiesService {

    async findAll(req: Request, resp: Response, next: NextFunction) {
        const deals = await DealsPipedriveService.getDealsWonYesterday()
        resp.json(deals)
        next()
    }

}
export default new OpportunitiesService();