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

router.put("/update/:name", async (req,res)=>{
    const name = req.params.name;
    const{companyname,price,quantity,type}=req.body;
    const data={
        companyname : companyname ,
        price  : price   ,
        quantity    : quantity     ,
        type        : type
    }
    // console.log(data);

    // console.log([companyname,price,quantity,type]);
    try {
        const updatedItem = await ProductdataSchema.findOneAndUpdate(
          { name: name },
          { $set: data },
          { new: true }
        );
        if (updatedItem) {
          return res.status(200).json({ message: 'Item updated successfully'});
        } else {
          return res.status(404).json({ message: 'Item not found' });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred' });
      }
})

router.get("/productget",async (req,res)=>{
    const data= await ProductdataSchema.find();
    res.status(200).send(data);
})

module.exports=router;
