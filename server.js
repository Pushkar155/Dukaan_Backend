const express= require("express");
var jwt = require('jsonwebtoken');
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const PORT= 3001;

// all Auth
const authperson=require("./router/persondata");
const loginauth=require("./router/login");

const app = express();
app.use(cors());
app.use(bodyparser.json());
dotenv.config();

const allowedOrigins = ['http://localhost:3000','https://adminganesh.netlify.app']

const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));


app.use("/api/person",authperson);
app.use("/api/log",loginauth);


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
