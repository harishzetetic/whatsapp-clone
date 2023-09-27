import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${username}:${password}@ac-bwypspz-shard-00-00.jaqjor8.mongodb.net:27017,ac-bwypspz-shard-00-01.jaqjor8.mongodb.net:27017,ac-bwypspz-shard-00-02.jaqjor8.mongodb.net:27017/?ssl=true&replicaSet=atlas-120hhf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {
            useUnifiedTopology: true,

        })
        console.log('Congratulations! Database Connected Successfully')
    }catch(e){
        console.log('Error while connected DB', e.message)
    }
}

export default Connection;