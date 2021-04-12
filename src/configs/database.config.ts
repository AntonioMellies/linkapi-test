import * as mongoose from 'mongoose';
import { environment } from './environment.config';

class DataBase {

    createConnection() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        mongoose.connect(environment.server.db_uri, options)
            .then(conn => console.log(`CreateConnection DB_URI: ${environment.server.db_uri}`))
            .catch(err => console.log(`CreateConnection DB_URI: ${err}`));
    }
}

export default DataBase;