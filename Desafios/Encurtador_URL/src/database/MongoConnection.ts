import mongoose  from "mongoose";
import { config } from "../config/Constants";


export class MongoConnection {
    public async connect(): Promise<void>{
        try {
            const connectionString = config.MONGO_CONNECTION || '';
            await mongoose.connect(connectionString);   
            console.log("Database connected!!")
        }
        catch (error) {
            console.error(error);
            process.exit(1)
        }
    }
}