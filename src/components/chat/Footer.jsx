
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { Box, InputBase, styled } from "@mui/material";

import { useState, useEffect } from "react";
import { uploadFile } from "../../service/api";
const Container = styled(Box)`
    height:55px;
    background: #ededed;
    display: flex;
    width:100%;
    align-items:center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`

const NewMessageInputContainer = styled(Box)`
background-color: #fff;
border-radius:10px;
width: calc(94% - 100px);
`
const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height:20px;
    padding-left:25px;
    font-size:14px;
`
const Footer = ({sendText, setValue, value, file,setFile, setImage}) => {

    useEffect(()=>{
        const getImage = async() => {
            if(file){
                const data = new FormData();
                data.append('name', file.name)
                data.append('file', file)

                let response = await uploadFile(data)
                setImage(response.data)
            }
        }
        getImage();
    }, [file])
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }
    return <>
    <Container>
        <EmojiEmotionsOutlined/>
        <label htmlFor="fileInput">
        <AttachFile />
        </label>
        <input id="fileInput" type='file' style={{display: 'none'}}
        onChange={(e)=>onFileChange(e)}
        />
        <NewMessageInputContainer>

            <InputField placeholder="Type a message"
                onChange={(e)=>setValue(e.target.value)}
                onKeyDown={(e)=> sendText(e)}
                value={value}
            />
        </NewMessageInputContainer>
        <Mic/>
    </Container>
    </>
}

export default Footer;