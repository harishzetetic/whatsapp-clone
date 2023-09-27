import express from 'express';
import Connection from './database/db.js';
import route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

// step 1 initialize the express
const app = express();

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', route);

Connection();
// step2: listen the port number
const PORT = 8000;
app.listen(PORT, ()=>{console.log('server started on PORT ', PORT)})