
import {Drawer, Typography, Box} from '@mui/material'
import { useContext } from 'react'
import { ArrowBack } from '@mui/icons-material'
import styled from '@emotion/styled'
import { AccountContext } from '../context/AccountProvider'

const Header = styled(Box)`
    background: #008069;
    height:107px;
    color: #fff;
    display:flex;
    & > svg, & > p {
        margin-top:auto;
        padding:15px;
        font-weight: 600;

    }
`

const Component = styled(Box)`
    background: #ededed;
    height: 85%;

`

const drawerStyle = {
    left:20,
    top:17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const ImageContainer = styled(Box)`
    display:flex;
    justify-content:center;

`
const Image = styled('img')({
    width:200,
    height:200,
    borderRadius:'50%',
    padding: '25px 0'

})

const BoxWrapper = styled(Box)`
    background: #fff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    & :first-child{
        font-size:13px;
        color: #009688;
        font-weight:200; 
    }
    & :last-child{
        margin: 14px 0;
        color: #4a4a4a;
    }
`

const DescriptionContainer = styled(Box)`
        padding: 15px 20px 28px 30px;
        & > p{
            font-size:13px;
            color: #8696a0
        } 
    `
const InfoDrawer = ({open, setOpen}) => {
    const {account} = useContext(AccountContext)
    return (<>
        <Drawer open={open} onClose={()=>{
            setOpen()
        }}
        PaperProps={{sx:drawerStyle}}
        style={{zIndex: 1500 }}
        >
           <Header>
                <ArrowBack onclick={()=>setOpen()}/>
                <Typography>Profile</Typography>
           </Header>
           <Component>
                <ImageContainer>
                    <Image src={account.picture} />
                </ImageContainer> 
                <BoxWrapper>
                    <Typography>Your Name</Typography>
                    <Typography>{account.name}</Typography>
                </BoxWrapper>
                <DescriptionContainer>
                    <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
                </DescriptionContainer>
                <BoxWrapper>
                    <Typography>About</Typography>
                    <Typography>Eat! Sleep! Code! Repeat!</Typography>
                </BoxWrapper>
           </Component>
        </Drawer>
    </>)
}

export default InfoDrawer;