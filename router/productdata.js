const router=require("express").Router();

const ProductdataSchema =require("../schema/productsdataschema");

router.post('/productadd',async (req,res)=>{
    const{name,companyname,price,quantity,type}=req.body;
    try {
        let exist= await ProductdataSchema.findOne({name});
        
        if(exist){
            return res.status(403).json({message:"Already Exixted"});
        }
        else{
            const newdata= new ProductdataSchema({
                name:name,
                companyname:companyname,
                price:price,
                quantity:quantity,
                type:type
            });
            await newdata.save();
            return res.status(200).json({message:"New Data Added"});
        }

    } catch (error) {
        return res.status(500).json({error:"Server Error"});
    }
})

router.get("/productget",async (req,res)=>{
    const data= await ProductdataSchema.find();
    res.status(200).send(data);
})

module.exports=router;
