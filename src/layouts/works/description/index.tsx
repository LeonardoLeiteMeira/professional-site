import { Theme, Typography, TypographyProps, styled, useMediaQuery } from "@mui/material"

const BodyText = styled(Typography)<TypographyProps>(({theme})=>({
    marginLeft:theme.spacing(4),
    marginRight:theme.spacing(4),
}))

export default function Description(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    return (
        <>
            <BodyText variant="body1" align="justify">
                Eu desenvolvi sistemas em diferentes contextos, incluindo empresas júnior e startup. 
            </BodyText>
            <br/>
            <BodyText variant="body1" align="justify">
                Agora, estou fazendo meu mestrado e trabalhando em um grande projeto. Abaixo estão listados alguns dos projetos que participei. 
                
                {isDesktop?" Clique":" Toque"} para ver detalhes:
            </BodyText>
            <br/>  
        </>
    )
}