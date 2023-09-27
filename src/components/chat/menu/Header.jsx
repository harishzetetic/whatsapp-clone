
import {useContext, useState} from 'react';
import {Box, styled} from '@mui/material';
import { AccountContext } from '../../context/AccountProvider';
import {Chat as MessageIcon, MoreVert} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display:flex;
    align-items:center;

`

const Image = styled('img')`
    height: 40px;
    width: 40px;
    border-radius: 50px;
`

const Wrapper = styled(Box)`
    margin-left:auto;
    & > * {
        margin-left:2px;
        padding: 8px;
        color: #000;
    }
    & :first-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const {account} = useContext(AccountContext);
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
    return <>
     <Component>
        <Image src={account.picture} alt="dp" onClick={toggleDrawer}/>
        <Wrapper>
            <MessageIcon/>
            <HeaderMenu setOpen={setOpenDrawer} />
        </Wrapper>
     </Component>
     <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
}
export default Header;