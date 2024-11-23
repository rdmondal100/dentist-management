import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(connectionInstance)
    } catch (error) {
        console.log("Error connecting database::", error)
        process.exit(1)
    }
}


export default connectDb