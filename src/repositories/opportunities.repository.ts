import mongoose, { Model } from 'mongoose';
import { IMongoRepository } from './interface.mongo.repository';
import { Schema } from 'mongoose';
class OpportunitiesRepository implements IMongoRepository {

    model: Model<any>;

    private schema = {
        date: { type: Date },
        deals: { type: Array },
        totals: { type: Object }
    }

    constructor() {
        this.model = mongoose.model("opportunities", new Schema(this.schema));
    }

}

export default new OpportunitiesRepository();



