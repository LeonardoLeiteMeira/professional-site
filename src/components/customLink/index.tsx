import Link, { LinkProps } from "next/link"
import { styled } from "@mui/material";

interface LinkStyledProps extends LinkProps {
  underline: boolean;
}

const LinkStyled = styled(Link)<LinkStyledProps>(({underline})=>({
  textDecoration: underline?"":"none",
  color: "inherit",
  alignItems:"center",
}))

interface Props{
    href:string
    children:React.ReactNode
    underline?:boolean
}

export default function CustomLink({href, children, underline = false}:Props){
    return(
        <LinkStyled href={href} underline={underline} >
            {children}
        </LinkStyled>
    )
}