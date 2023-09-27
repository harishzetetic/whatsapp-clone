
import { Box, styled, Typography } from "@mui/material";
import { Search, MoreVert, More } from "@mui/icons-material";
import { defaultProfilePicture } from "../../constants/data";
import { Avatar } from '@mui/material';
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
const Header = styled(Box)`
    display:flex;
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    align-items:center;
`

const Name = styled(Typography)`
    margin-left: 12px !important;
`
const Status = styled(Typography)`
margin-left: 12px !important;
font-size:12px;
color: rgb(0,0,0,0.6)
`


const RightContainer = styled(Box)`
    margin-left:auto;
`
const ChatHeader = ({person}) => {

    const {activeUsers} = useContext(AccountContext)
    return (
        <>
       <Header>
        <Avatar src={person.picture} />
        <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
        </Box> 
        <RightContainer>
            <Search />
            <MoreVert />
        </RightContainer>
       </Header>
        </>
    )
}

 export default ChatHeader;