import { Model } from "mongoose";


export interface IMongoRepository {
    model: Model<any>;
}