import { routes } from './index';
import { Express, Router } from 'express'
import { AbstractRouter } from '../common/abstract.router'
import OpportunitiesService from '../services/opportunities.service'


class OpportunitiesRouter extends AbstractRouter {

    router = Router()

    constructor() {
        super('opportunities')
    }

    applyRoutes() {
        this.router.get(`${this.basePath}`, OpportunitiesService.findAll);

        return this.router;
    }
}

export default new OpportunitiesRouter();