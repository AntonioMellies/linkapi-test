import { Router } from 'express'
import { AbstractRepository } from '../common/abstract.repository';
//import TestService from '../services/test.service';


class OpportunitiesRouter extends AbstractRepository<any> {

    router = Router()

    constructor() {
        super('opportunities')
    }

}

export default new OpportunitiesRouter();