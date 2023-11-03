import CustomAppBar from "@/components/customAppBar";
import Navbar from "@/components/navbar";
import { Navigation } from "@mui/icons-material";
import { Theme, useMediaQuery } from "@mui/material";
import { useCallback } from "react";

interface Props{
    children:React.ReactNode
}

export default function NavigationBar({children}:Props){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    return (
        <>
            {isDesktop ? (
                <>
                    <Navbar/>
                    {children}
                </>
            ) : (
                <CustomAppBar title={"Leonardo Leite - Software Engineer"}>
                    {children}
                </CustomAppBar>   
            )}
        </>    
    );
}