import { NextFunction, Request, Response } from "express";

class OpportunitiesService {

    findAll(req: Request, resp: Response, next: NextFunction) {
        resp.json({ mensagem: "Resp. Find All" })
        next();
    }

    findById(req: Request, resp: Response, next: NextFunction) {
        resp.json({ mensagem: "Resp Find by ID" })
        next();
    }

}
export default new OpportunitiesService();