import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo db connected :",conn.connection.host)

        
    } catch (error) {
        console.log('Error connecting to DB :' ,error)
        
    }

}
export default connectMongoDB