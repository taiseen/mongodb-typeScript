import { customErrorMessage, errorHandler } from './middleware/errorHandler';
import { PORT } from './config';
import dbConnection from './connection';
import testRoute from './routes/test';
import express from 'express';


const app = express();


app.listen(PORT, () => dbConnection());

app.get('/', (req, res) => res.json({ sms: 'Hello form TS server...' }));

app.use('/test', testRoute);



// for url routing...
// 1st create our custom error message + handling system... 
// and use it as a middleware...
app.use(customErrorMessage);
app.use(errorHandler);