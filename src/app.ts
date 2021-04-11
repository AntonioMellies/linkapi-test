import express from 'express'
import { routes } from './routes/index';

const app = express()
app.use(express.json())

//Routers
for (let router of routes) {
    app.use(router.applyRoutes());
}

export { app }