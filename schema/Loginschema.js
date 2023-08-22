const mongoose=require("mongoose");

const LoginSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        password:{
            type: Number,
            required: true,
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Dukan_Login_data",LoginSchema);