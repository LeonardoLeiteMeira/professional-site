import Link, { LinkProps } from "next/link"
import { styled } from "@mui/material";

const LinkStyled = styled(Link)<LinkProps>(()=>({
  color: "inherit",
  alignItems:"center",
}))

interface Props{
    href:string
    children:React.ReactNode
    hasDecoration?:boolean
}

export default function CustomLink({href, children, hasDecoration = false}:Props){
    return(
        <LinkStyled href={href} sx={{textDecoration: hasDecoration?"underline":"none"}} >
            {children}
        </LinkStyled>
    )
}