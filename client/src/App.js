
const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');


const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


var curl = "mongodb://localhost:27017"
var client = new MongoClient(curl);

//login module database
app.post('/regestration/signin', async function(req,res){
    try{
        conn = await client.connect();
        db = conn.db('final');
        users = db.collection('users');
        data = await users.count(req.body);
        conn.close();
        res.json(data);
    }
    catch(err){
        res.json(err).status(404);
    }
});
//REGISTRATION MODULE
app.post('/registration/signup', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('MSWD');
        users = db.collection('users');
        data = await users.insertOne(req.body);
        conn.close();
        res.json("Registered successfully...");
    }catch(err)
    {
        res.json(err).status(404);
    }
});
