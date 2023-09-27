import mongoose from "mongoose";


const MessageSchema = mongoose.Schema({
    conversationId:{
        type:String
    },
    senderId:{
        type:String
    },
    recieverId:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    },
},{
    timestamp:true
});


const message = mongoose.model('Message', MessageSchema);

export default message;