import express, { Application, Request, Response } from "express";
import mongoDB from "./connection/mongoDB.ts";
import cors from "cors";


const app: Application = express();


app.use(cors()); // use cors
app.use(express.json()); // parsing data...
app.use(express.urlencoded({ extended: true }));



const welcome = (req: Request, res: Response) => res.send('Hello Taiseen with TypeScript...!');
app.get('/', welcome);



const port: number = 5000;
app.listen(port, () => {
    console.log(`app start on port ${port}`);
    mongoDB();
})