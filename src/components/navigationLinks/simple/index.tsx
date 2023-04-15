import { PageLink } from "@/assets/constants"
import CustomLink from "@/components/customLink"
import { Box, List, ListItem, ListProps, Theme, Typography, TypographyProps, styled, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "next-i18next"

const StyledList = styled("ul")(()=>({
    paddingLeft:0
}));

const StyledItem = styled("li")(({theme})=>({
    marginLeft:theme.spacing(1.7)
}));

interface Props{
    links:Array<PageLink>
}

export default function SimpleNavigationLink({links}:Props){
    const { t } = useTranslation()
    const theme = useTheme()
    const isSmallScreen = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
    
    return (
        <Box>
            <Typography variant="body2" fontSize={isSmallScreen?16:18}>
                {t("See also")}
            </Typography>

            <StyledList>
                {links.map((item)=>(
                    <StyledItem key={item.name}>

                        <CustomLink href={item.link} key={item.name}>
                            <Typography variant="body1" color={theme.palette.primary.main} fontSize={isSmallScreen?18:20}> {t(item.name)} </Typography>
                        </CustomLink>

                    </StyledItem>
                ))}

            </StyledList>
        </Box>    
    )
}