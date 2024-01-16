const express = require('express');
const { any } = require('webidl-conversions');
const User = require('./db/user');
const coros = require("cors");

require('./db/config');
require('./db/user')

const app = express();
app.use(express.json());
app.use(coros());

//Sign-up API
app.post("/register", async (req, resp) => {

    // if(req.body.name == "nil"){
    //     resp.send("true");
    //   }else{
    //     resp.send("false");
    //   }

    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})

//Login API
app.post("/login", async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({"error":"No user found"})
        }
       
    }  else {
        resp.send({"error":"No user found"})
    }
})


//Get api
app.get('/', async (req, resp) => {
  //  let data = await dbconnect();
  //  data = await data.find().toArray();
   // console.log(data)
    resp.send({name:'Kiran', email:'Kiran@gmail.com',phone:'7795671546'})
}) 
 

//Save the products 


//Fetch the Products


// const mongoose = require('mongoose');
// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/e-commerce');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('users',productSchema);
//     const data = await product.find();
//     console.log('data', data);
// }
// connectDB()


//Testing purpose
// app.get('/', (req, res) => {
//     res.send('Hello World, from express');
// });

app.listen(8000);