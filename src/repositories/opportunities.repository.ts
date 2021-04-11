import { Router } from 'express'
import { AbstractRepository } from '../common/abstract.repository';

class OpportunitiesRouter extends AbstractRepository<any> {

    router = Router()

    constructor() {
        super('opportunities')
    }

}

export default new OpportunitiesRouter();