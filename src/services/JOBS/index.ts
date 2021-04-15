import { AbstractJob } from '../../common/abstract.job'
import { PedidoIntegrateJobService } from './pedido.integrate.job.service'

export const jobs: AbstractJob[] = [
    new PedidoIntegrateJobService('0 1 * * *')
]