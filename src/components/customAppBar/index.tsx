import { AppBar, Box, Grid, IconButton, Toolbar, Typography, useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface Props{
    children:React.ReactNode,
    title:string
}


export default function CustomAppBar({children, title}:Props){
    const theme = useTheme()
    return (
        <>
            <AppBar position="fixed" sx={{ bgcolor: theme.palette.background.paper}}>
                <Toolbar variant="dense">
                    <IconButton size="large" edge="start" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Grid container width={"100vw"} justifyContent={"center"}>
                        <Typography variant="subtitle1" color={"black"}>{title}</Typography>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Box marginTop={theme.spacing(6)}>
                {children}
            </Box>
        </>
    )
}