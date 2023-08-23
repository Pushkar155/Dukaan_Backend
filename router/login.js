const router=require("express").Router();

const LoginSchema=require("../schema/Loginschema");


router.post('/login', async (req,res)=>{

    const{name,password}=req.body;
    try {
        let exist = await LoginSchema.findOne({name});
        if(!exist){
            const newuser= new LoginSchema({
                name,
                password
            });
            await newuser.save();
            res.json({message:"New User Updated"});
        }
        
    } catch (error) {
        return res.status(500).send("Server Error")
    }
})

router.post('/loginuser', async (req,res)=>{
    const{name,password}=req.body;
    // console.log(password,typeof(password),name)
    // console.log("hello")
    try {
        let exist = await LoginSchema.findOne({name});
        // console.log(typeof(exist.password))
        if(exist){
            if(exist.password===password){
               return res.status(201).json({"message":"success full login"});
            }
            if(exist.password!=password){
                return  res.status(403).json({"message":'wrong password'});
            }
        }
        if(!exist){
            return res.status(403).json({"message":"User Not Exist"})
        }
        
    } catch (error) {
        return res.status(403).send("Wrong Credentials")
    }
})
module.exports=router;