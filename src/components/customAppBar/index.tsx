import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CustonDrawer from "../customDrawer";

interface Props{
    children:React.ReactNode,
    title:string
}


export default function CustomAppBar({children, title}:Props){
    const theme = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <CustonDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
            <AppBar position="fixed" sx={{ bgcolor: theme.palette.background.paper}}>
                <Toolbar variant="dense">
                    <IconButton onClick={()=>setIsOpen(value=>!value)} size="large" edge="start" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                        <Typography variant="subtitle1" color={"black"} noWrap overflow="hidden" textOverflow={"ellipsis"}>{title}</Typography>                    
                </Toolbar>
            </AppBar>

            <Box marginTop={theme.spacing(6)}>
                {children}
            </Box>
        </>
    )
}