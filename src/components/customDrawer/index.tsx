import { Box, BoxProps, Typography, styled, Grid, IconButton, useTheme, Drawer } from "@mui/material";
import SwitchLanguage from "../switchLanguage";
import ContactButton from "../contactButton";
import { links } from "@/assets/constants";
import CustomLink from "../customLink";
import Icons from "@/assets/icons";
import Image from "next/image";

const StyledDrawer = styled(Box)<BoxProps>(({theme})=>({
    width:"60vw",
    backgroundColor:theme.palette.background.paper
}))

interface Props{
    isOpen:boolean
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export default function CustonDrawer({isOpen, setIsOpen}:Props){
    const theme = useTheme()

    return (
        <Drawer open={isOpen} anchor={"left"}>
            <StyledDrawer>
                <Grid container flexDirection={"column"} wrap="nowrap" alignItems={"center"}gap={7}>
                    <IconButton onClick={()=>setIsOpen(value=>!value)} size="large" edge="start" aria-label="menu">
                        <Image 
                            src={Icons.CloseMenu} 
                            alt={"Close menu icon"}
                            width={30} 
                            height={30}
                        /> 
                    </IconButton>
                    <SwitchLanguage isNavbar={true} />

                    <Grid container flexDirection={"column"} wrap="nowrap" paddingLeft={theme.spacing(2.5)} gap={5}>
                        {links.map((item)=>(
                            <Grid item key={item.name}>
                                <CustomLink href={item.link}>
                                    <Typography variant="h2" fontSize={22}>{item.name}</Typography>
                                </CustomLink>
                            </Grid>
                        ))}
                    </Grid>

                    <ContactButton size="small"/>
                </Grid>
            </StyledDrawer>
        </Drawer>
    )
}