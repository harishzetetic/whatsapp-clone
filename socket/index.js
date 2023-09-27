import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

let users = []
const addUser = (userData, socketID) => {
    !users.some(user => user.sub === userData.sub) && users.push({...userData, socketID})
}
io.on('connection', (socket)=>{
    console.log('user connected');

    socket.on("addUsers", userData => {
        addUser(userData, socket.id)
        io.emit('getUsers', users)
    })
})