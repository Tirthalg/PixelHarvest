import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const connectionString = process.env.DB_STRING
console.log("cs = "+connectionString)
const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            autoIndex: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (connectionString) => {
        console.log(`Database connected: ${connectionString}`);
    });
    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
      });
}
export default connectToDB