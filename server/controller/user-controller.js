import User from '../model/User.js'


export const addUser = async (request, response) => {
    try{
        const exist = await User.findOne({sub: request.body.sub})
        if(exist){
            response.status(200).json({msg: 'User Already Exist'})
            return;
        }
        const newUser = new User(request.body);
        await newUser.save()
        response.status(200).json(newUser)
        return;
    }catch(e){
        response.status(500).json(e) 
    }
}

export const getUsers = async (request, response) => {
    try{
        const users= await User.find({});
        return response.status(200).json(users)
    }catch(e){
        return response.status(500).json(e.message)
    }
}
