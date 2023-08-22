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
    try {
        let exist = await LoginSchema.findOne({name});
        if(exist){
            if(exist.password===password){
                res.status(201).json({"message":"success full login"});
            }
            if(exist.password!=password){
                return  res.status(403).send('wrong password');
            }
        }
        
    } catch (error) {
        return res.status(403).send("Wrong Credentials")
    }
})
module.exports=router;