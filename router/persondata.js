const router=require("express").Router();

// const personSchema = require("../schema/personSchema");
const Personchema = require('../schema/personSchema');


router.post('/addData', async (req, res) => {
    const { name, data,phone,totalamount,totalpaid } = req.body;
    console.log(totalamount,totalpaid);
    // console.log("hello from post")
    try {
        let exist = await Personchema.findOne({name});
        // console.log(exist.data);
        
        if(exist){
            // console.log(exist.data)
            exist.data.push(data);
            // console.log(exist.data)
            await exist.save();
            res.json({ message: 'Data updated successfully' });
        }
        else{
            const newdata= new Personchema({
                name,
                data,
                phone,
                totalamount,
                totalpaid
            });
            await newdata.save();
            res.json({message:"New Data Added Succefully"});
        }
        // console.log(exist.data);
        
    } catch (error) {
        res.status(500).json({error:"Server Error"});        
    }


});
router.get("/getData",async (req,res)=>{
    const person =await Personchema.find();
    console.log("hello");
    res.status(200).send(person);
})

module.exports=router;