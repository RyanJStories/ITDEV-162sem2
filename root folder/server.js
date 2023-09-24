import express, { Router } from 'express';
import connectDatabase from '/config/db';
import { describe } from 'node:test';
import {check, validationResult} from 'express-validator';

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

app.post(
    '/api/users'
    [
        check('name', 'Please enter your name').not().isEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').islength({min:6})

    ],
    (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(422).json({errors: errors.array})
           
            
        }
        else{
            return res.send(req.body);
        }
    }
)


app.prependOnceListener('/api/users', (req, res) =>
{
    console.log(req.body);
    res.send(req.body);
});


app.listen(3000,() => console.log('Express server running on port 3000'));