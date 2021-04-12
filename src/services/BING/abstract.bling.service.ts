import { environment } from '../../configs/environment.config';


export abstract class AbstractBlingService {

    getUrl(endpoint: string): string {
        return `${environment.bling.api_url}${endpoint}`
    }

    getToken() {
        return environment.bling.api_key
    }

}