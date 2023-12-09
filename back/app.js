import express from 'express';
import mysql from 'mysql';
import cors from "cors"
import dotenv from 'dotenv';
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();
import branchRouter from './routes/branchrouter.js';
import traineeRouter from './routes/Traineerouter.js';
import staffRouter from './routes/Staffrouter.js';
import trainerRouter from './routes/Trainerrouter.js';
app.use(express.urlencoded({ extended: true }));
app.get('/',(re,res)=>{
    return res.json("hello from backend");
});
app.use('/bran',branchRouter);
app.use('/trainee',traineeRouter);
app.use('/staff',staffRouter);
app.use('/trainer',trainerRouter);
/*const db=mysql.createConnection({ ////////////////////////////for test const syntaxes
    host:'127.0.0.1',
    user:'root',
    password:'salma',
    database:'sql_gym'
})
app.get('/bran',(req,res)=>{    //for retreval
    const d="SELECT * FROM branches "
    db.query(d,(err,data)=>{
        if(err)
        return (res.json(err));
        else
        return (res.json(data));

    })
})
app.post('/sign',(req,res)=>{         //for posting
    const d='INSERT INTO branches   values(?,?,?)'
   
    db.query(d,[req.body.BID,req.body.BranchNum,req.body.City],(err,data)=>{
        if(err)
        return (res.json(err));
        else
        return (res.json(data));

    })
})
app.put('/update/:id',(req,res)=>{           //for updtaes
    const d='Update branches  set BID=? WHERE BID=?'
   
    db.query(d,[req.body.BID,req.params.id],(err,data)=>{
        if(err)
        return (res.json(err));
        else
        return (res.json(data));

    })   
})
app.delete('/delete/:id',(req,res)=>{     //for deletion
    const d='delete from branches  WHERE BID='
   
    db.query(d+[req.params.id],(err,data)=>{
        if(err)
        return (res.json(err));
        else
        return (res.json(data));

    })   

})*/
app.listen(8082,()=>{
    console.log("lestening");
})
