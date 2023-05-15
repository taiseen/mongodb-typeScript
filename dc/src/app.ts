import { customErrorMessage, errorHandler } from './middleware/errorHandler';
import { PORT } from './config';
import dbConnection from './connection';
import testRoute from './routes/test';
import welcome from './controllers';
import express from 'express';


const app = express();

app.use(express.json()); // if not use it, then we get client sending data "undefined"

app.listen(PORT, () => dbConnection());

app.get('/', welcome);

app.use('/test', testRoute);



// for url routing...
// 1st create our custom error message + handling system... 
// and use it as a middleware...
app.use(customErrorMessage);
app.use(errorHandler);