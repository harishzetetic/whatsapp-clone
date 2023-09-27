


import { Box, styled, Typography } from "@mui/material";
import Footer from "./Footer";
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { useContext } from "react";
import {AccountContext} from '../context/AccountProvider'
import { useState, useEffect } from "react";
import { getMessages, newMessage } from "../../service/api";
import { formattedDate, downloadMedia } from "../../utils/CommonUtils";


const Wrapper = styled(Box)`
background-color: lightgray;
`

const Component = styled(Box)`
    height:80vh;
    overflow-y:scroll;
`
const Messages = ({person, conversation}) => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [image, setImage] = useState()
    const [file, setFile] = useState();

    const {account} = useContext(AccountContext)

    useEffect(()=>{
        const getMessageDetails = async () =>{
            console.log(conversation)
            const data = await getMessages(conversation._id)
            setMessages(data);

        }
        conversation._id && getMessageDetails()
    }, [person._id, conversation._id, newMessageFlag])


    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if(code === 13){
            let message={};
            if(!file){
                message  = {
                    senderId: account.sub,
                    recieverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            } else{
                message  = {
                    senderId: account.sub,
                    recieverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }
           
            await newMessage(message);
            setValue('')
            setFile('')
            setImage('')
            setNewMessageFlag(prev => !prev)
        }
    }
    return <>
        <Wrapper>
            <Component>
                {messages && messages.map(msg => {
                    return <Message message={msg}/>
                })}
            </Component>
            <Footer setImage={setImage} sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile}/>
        </Wrapper>
    </>
}

export default Messages;




const Own = styled(Box)`
    background: #dcf8c6;
    max-width:60%;
    margin-left:auto;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word;

`
const MsgWrapper = styled(Box)`
    background: #ffffff;
    max-width:60%;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word;

`

const Text = styled(Typography)`
    font-size:14px;
    padding: 0 25px 0 25px;

`

const Time = styled(Typography)`
font-size:10px;
color: #919191;
margin-top: 6px;
word-break:keep-all;
margin-top:auto;
`

const Message = ({message}) => {
    const {account} = useContext(AccountContext)
    return <div style={{width: '80%', margin:'auto'}}>
       {account.sub === message.senderId ? 
        <>
            <Own>
                {message.type === 'file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>}
            </Own>
        </>   : <>

        <MsgWrapper>
        {message.type === 'file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>}
            </MsgWrapper>
        </>
    
    }
    </div>
}

const ImageMessage = ({message}) => {
    return <Box style={{position: 'relative'}}>
        {
            message?.text?.includes('.pdf') ? 
            <box>
                {/*<img src={pdfIcon} alt={"pdf"} style={{width: 80}}/>*/}
                <Typography>{message.text}</Typography>
            </box> : <img style={{width: '300px', height: '100%'}}src={message.text} alt={message.text} />
        }
        <Time style={{position:'absolute', bottom: 0, right: 0}}>
            <DownloadForOfflineOutlinedIcon onClick={e=>downloadMedia(e, message.text)} />
            {formattedDate(message.createdAt)}</Time>
    </Box>
}

const TextMessage = ({message}) => {
    return <>
    <Text>{message.text}</Text>
                <Time>{formattedDate(message.createdAt)}</Time>
    </>
}