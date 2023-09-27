import grid from 'gridfs-stream'
import mongoose from 'mongoose';

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once('open', ()=>{
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo)
    gfs.collection('fs')
})
const url = 'http://localhost:8000';

export const uploadFile = async (req, res) => {
    if(!req.file){
        return res.status(404).json('File not found')
    }   
    const imageURL = `${url}/file/${req.file.filename}`
    return res.status(200).json(imageURL)
}

export const getImage = async(request, response) => {
    try{
        const file = await gfs.files.findOne({filename: request.params.filename})
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(response)
    }catch(e){
        response.status(500).json(e.message)
    }
}