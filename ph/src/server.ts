import express, { Application } from "express";
import userRoute from "./modules/user/Routes";
import welcomeInfo from "./utils/welcomeInfo.ts";
import mongoDB from "./connection/mongoDB.ts";
import cors from "cors";


const app: Application = express();


app.use(cors()); // use cors
app.use(express.json()); // parsing data...
app.use(express.urlencoded({ extended: true }));


// share this variable within whole application...
app.locals.userApiUrl = '/api/user'; // url endpoint


app.use(app.locals.userApiUrl, userRoute);


app.get('/', welcomeInfo);


const port: number = 5000;
app.listen(port, () => {
    console.log(`Server Running Port ==> ${port}`);
    mongoDB();
});
