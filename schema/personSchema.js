const mongoose=require("mongoose");

const Personchema = new mongoose.Schema(
    {
        data:{
            type:[[Object]],
            required:true,
        },
        name:{
            type: String,
            required: true,
        },
        phone:{
            type:Number,
            required:false
        },
        totalamount:{
            type : Number ,
            require :true
        },
        totalpaid:{
            type:Number,
            require:true
        }

    },
    {timestamps:true}
);


module.exports=mongoose.model("Dukan_person_data",Personchema);
