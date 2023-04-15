import { PageLink } from "@/assets/constants"
import CustomLink from "@/components/customLink"
import { Grid, Theme, Typography, TypographyProps, styled, useMediaQuery } from "@mui/material"
import { useTranslation } from "next-i18next"

const LinkText = styled(Typography)<TypographyProps>(({theme})=>({
  fontSize:26,
  padding:theme.spacing(1),
  
  [theme.breakpoints.up("md")]:{
    fontSize:38,
    '&:hover': {
      fontSize: 46,
      color:"white",
    },
    marginRight:theme.spacing(6)
  }
}))

interface Props{
    links:Array<PageLink>
}

export default function LargeNavigationLink({links}:Props){
    const { t } = useTranslation()
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));

    return (
        <Grid item container display={"flex"} flexDirection="column" alignItems={isDesktop?"end":"center"} gap={isDesktop?8:0}>
            {links.map((item)=>(

                <CustomLink href={item.link} key={item.name}>
                    <LinkText variant="h4">{t(item.name)}</LinkText>
                </CustomLink>
                
            ))}
      </Grid>   
    )
}