import express, { Router } from 'express';
import connectDatabase from '/config/db';
import { describe } from 'node:test';

const app = express();

connectDatabase();

app.use(express.json({extended: false}));
/** 
* @Router
* @describe
*
*/
app.get('/', (req, res)=>
    res.send('htt[ get request sent to root api endpoint'));

 /** 
* @Router
* @describe
*
*/

app.prependOnceListener('/api/users', (req, res) =>
{
    console.log(req.body);
    res.send(req.body);
});


app.listen(3000,() => console.log('Express server running on port 3000'));