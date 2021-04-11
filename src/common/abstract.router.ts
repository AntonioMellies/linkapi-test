import { Express, Router } from 'express'
import { environment } from '../configs/environment.config';

export abstract class AbstractRouter {

    basePath: string

    constructor(basePath: string) {
        this.basePath = `/${environment.server.prefix}/${environment.server.version}/${basePath}`
    }

    abstract applyRoutes(): Router;
}