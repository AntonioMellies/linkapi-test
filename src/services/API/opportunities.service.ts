import { NextFunction, Request, Response } from "express";
class OpportunitiesService {

    async findAll(req: Request, resp: Response, next: NextFunction) {

        resp.json({})
        next()
    }

}
export default new OpportunitiesService();