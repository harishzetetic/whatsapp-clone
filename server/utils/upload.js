 
 import multer from 'multer';
 import {GridFsStorage} from 'multer-gridfs-storage';
 import dotenv from 'dotenv'

 dotenv.config();
 
 const username=process.env.DB_USERNAME;
 const password=process.env.DB_PASSWORD;

 const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@ac-bwypspz-shard-00-00.jaqjor8.mongodb.net:27017,ac-bwypspz-shard-00-01.jaqjor8.mongodb.net:27017,ac-bwypspz-shard-00-02.jaqjor8.mongodb.net:27017/?ssl=true&replicaSet=atlas-120hhf-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options:{useUnifiedTopology: true, useNewUrlParser: true},
    file: (req, file)=>{
        const match = ["image/png", "image/jpg"];
        if(match.indexOf(file.mimeType) === -1){
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName: 'photos',
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
 })

 export default multer({storage})