import { environment } from '../../configs/environment.config';

const pipedrive = require('pipedrive');
pipedrive.Configuration.apiToken = environment.pipedrive.api_token;

export abstract class AbstractPipedriveService {

    getClient(): any {
        return pipedrive;
    }

}