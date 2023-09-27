import Conversation from "../model/Conversation.js";

export const newConversation = async(request, response) => {
    try{
        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;
        const exist = await Conversation.findOne({members: {$all: [recieverId, senderId]}});
        if(exist){
            return response.status(200).json('conversation already exist')
        }
        const newConversation = new Conversation({
            members: [recieverId, senderId]
        })
        await newConversation.save()
        return response.status(200).json('Conversation saved successfully')
    } catch(e){
        return response.status(500).json(e.message)
    }
}

export const getConversation = async(request, response) => {
    try{
        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;
        let conversation =  await Conversation.findOne({members: {$all: [recieverId, senderId]}});
       
        return response.status(200).json(conversation)
    } catch(e){
        return response.status(500).json(e.message)
    }
}