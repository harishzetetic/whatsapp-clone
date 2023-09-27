
import {MoreVert, SignalCellularNull} from '@mui/icons-material';
import {Menu, MenuItem, styled} from '@mui/material';
import React from 'react'

const MenuOption = styled(MenuItem)`
font-size: 14px;
padding: 15px 60px 5px 24px;
color: #4a4a4a;
`
const HeaderMenu = (props) => {
    const [open, setOpen] = React.useState(null)
    const handleClose = () => {
        setOpen(null)
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    return <>
        <MoreVert onClick={handleClick} />
        <Menu anchorEl={open} open={open} keepMounted onClose={handleClose} getContentAnchorE1={null} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }} transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}>
            <MenuOption onClick={() => {handleClose(); props.setOpen(true) }}>Profile</MenuOption>
          
        </Menu>
    </>
}
export default HeaderMenu;