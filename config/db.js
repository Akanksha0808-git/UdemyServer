const CloudURL="mongodb+srv://akanksharma0829:mycarrer@cluster0.fdcy9xi.mongodb.net/MyUdemyClone?retryWrites=true&w=majority"

const mongoose=require("mongoose")
const connection =async ()=>{
    try{
     await mongoose.connect(CloudURL)
     console.log("connection made successfully")
    }
    catch(err){
   console.log(err,"error occured with db")
    }
}
module.exports=connection
