import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import Router  from './routes.js';

const app = express()
app.use(express.json())

dotenv.config();

const connectionString = process.env.DB_STRING
const port = 3000
const hostname = '0.0.0.0'

mongoose.connect(connectionString, {
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.use(Router);

app.listen(port,hostname ,() => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});