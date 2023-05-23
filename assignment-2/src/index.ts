import express, { Application } from "express";
import bookRoute from "./module/Book/Router";
import welcome from "./utils/welcome";
import dbConnect from "./connection";
import cors from "cors";


const app: Application = express();


app.use(cors()); // use cors
app.use(express.json()); // parsing data...
app.use(express.urlencoded({ extended: true }));



app.use('/api', bookRoute); // app route's... 🛰️🚦🛰️



app.get('/', welcome);

const port: number = 5000;
app.listen(port, () => dbConnect());