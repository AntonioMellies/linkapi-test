import { environment } from '../configs/environment.config';

export abstract class AbstractJob {

    abstract execute(): void;
}