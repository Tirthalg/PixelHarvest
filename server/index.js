import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';

const app = express()
app.use(express.json())

dotenv.config();
const connectionString = process.env.DB_STRING
console.log("cs = "+connectionString)

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});