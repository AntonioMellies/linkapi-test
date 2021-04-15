import mongoose from "mongoose";
import { environment } from './environment.config';

class DataBase {

    createConnection() {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        try {
            mongoose.connect(environment.database.uri, options)
                .then(conn => console.log(`Connection Create`))
                .catch(err => console.log(`Database connection with error -> ${err}`));

        } catch (err) {
            console.error(err)
        }
    }
}

export default DataBase;