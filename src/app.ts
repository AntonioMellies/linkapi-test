import express from 'express'
import { routes } from './routes/index';
import { jobs } from './services/JOBS/index';
import DataBase from './configs/database.config';
class Application {

    public app: express.Application;
    private _db: DataBase;

    constructor() {
        this.app = express();
        this.app.use(express.json())

        this._db = new DataBase();
        this._db.createConnection();

        this.jobs();
        this.routes();
    }

    jobs() {
        for (let job of jobs) {
            job.toSchedule()
        }
    }

    routes() {
        for (let router of routes) {
            this.app.use(router.applyRoutes());
        }
    }
}
export default new Application();
