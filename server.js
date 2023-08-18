const express= require("express");
var jwt = require('jsonwebtoken');
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const PORT= 3001;

// all Auth
const authperson=require("./router/persondata");

const app = express();
app.use(cors());
app.use(bodyparser.json());
dotenv.config();


app.use("/api/person",authperson);


// app.get('/',(req,res)=>{
//     var token = jwt.sign({ foo: 'bar' }, "Private Key", { algorithm: 'HS256' });
//     resp = {
//         token: token
//     }
//     res.send(resp);
// })

app.get("/",(req,res)=>{
    res.send("Hello World From Server");
})
mongoose.connect(process.env.MONGO__DB).then(()=>{app.listen(process.env.PORT,()=>{
    console.log((`Node Api Is Connected To ${process.env.PORT}`))
})
    console.log("Connected To MongoDb");
}).catch((error)=>{
    console.log(error);
})

// app.get('/verify', (req,res)=>{
//     var token = req.headers['token']
//     try{
//         var decoded = jwt.verify(token, 'Private Key')
//     }
//     catch{
//         res.status(403).json({
//             message: "Invalid Token"
//         })
//     }
//     res.send("rsefsd")
// })

// app.listen(PORT,(req,res)=>{
//     console.log(`server is running ${PORT}`);
// })
