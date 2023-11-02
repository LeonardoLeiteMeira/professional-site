import { Grid, Typography, styled, useTheme } from "@mui/material";

const CardStyle = styled(Grid)(({theme})=>({
    margin:theme.spacing(1),
    padding:theme.spacing(2),
    backgroundColor:theme.palette.primary.main,
    borderRadius:theme.spacing(1),
    color:theme.palette.primary.contrastText,
}))

interface Props{
    title:string,

}

export default function MethodologyCard({title}:Props) {
    const theme = useTheme()
    return (
        <CardStyle 
            item container 
            xs={12} sm={6} md={2} 
            justifyContent="center" alignItems="center" 
        >
            <Typography variant="subtitle2" fontSize={14}>{title}</Typography>
        </CardStyle>
    )
}