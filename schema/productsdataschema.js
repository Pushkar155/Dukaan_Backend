const mongoose=require("mongoose");

const ProductdataSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        companyname:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        quantity:{
            type:Number,
            require:true
        },
        type:{
            type:String,
            require:true
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Dukkan_product_data",ProductdataSchema);