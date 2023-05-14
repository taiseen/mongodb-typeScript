import express, { ErrorRequestHandler } from 'express';
import httpErrors from 'http-errors';


const app = express();


app.listen(9000, () => { console.log('✅ TS Server Running...') });

app.get('/', (req, res) => res.json({ sms: 'Hello form TS server...' }));




// for url routing...
// 1st create oru custom error handling system... 
// and use it as a middleware...
const customErrorHandler = () => { throw httpErrors(404, 'Route Not Found...') };
app.use(customErrorHandler);


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {

    if (err.headersSend) return next(err);

    res.status(err.statusCode || 500)
        .json({ message: err.message || 'Unknown Error' })
}
app.use(errorHandler);

