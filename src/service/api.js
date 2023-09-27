import axios from 'axios';

const url = 'http://localhost:8000'
export const addUser = async (data) => {
    try{
       await axios.post(`${url}/add`, data) 
    }
    catch(e){
        console.log('Error while call addUser', e.message);
    }
}

export const getUsers = async ()=>{
    try{
        const response =  await axios.get(`${url}/users`);
        return response.data
    }catch(e){
        console.log('Error while calling getUsers', e)
    }
}

export const setConversation = async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`, data)
    }catch(e){
        console.log('Error while set conversation', e)
    }
}

export const getConversation = async (data)=>{
    try{
        return await axios.post(`${url}/conversation/get`, data)
    }catch(e){
        console.log('Error while get conversation', e)
    }
}

export const newMessage = async(data) => {
    try{
        return await axios.post(`${url}/message/add`, data)
    }catch(e){
        console.log('Error while create new message', e);
    }
}

export const getMessages = async(id)=>{
    try{
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data;
    }catch(e){
        console.log('Error while create get message', e);
    }
}

export const uploadFile = async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`, data)
    } catch(e){
        console.log('Error while upload file', e);
    }
}