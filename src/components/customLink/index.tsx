import Link, { LinkProps } from "next/link"
import { styled } from "@mui/material";

const LinkStyled = styled(Link)<LinkProps>(()=>({
  textDecoration: "none",
  color: "inherit",
  alignItems:"center",
}))

interface Props{
    href:string
    children:React.ReactNode
}

export default function CustomLink({href, children}:Props){
    return(
        <LinkStyled href={href}>
            {children}
        </LinkStyled>
    )
}