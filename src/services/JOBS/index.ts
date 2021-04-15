import { environment } from './../../configs/environment.config';
import { AbstractJob } from '../../common/abstract.job'
import { PedidoIntegrateJobService } from './pedido.integrate.job.service'


export const jobs: AbstractJob[] = [
    new PedidoIntegrateJobService(environment.jobs.pedido_integrate.cron)
]