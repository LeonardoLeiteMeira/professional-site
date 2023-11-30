import { colors } from "@/assets/constants";
import { Grid, Typography, styled, useTheme } from "@mui/material";

const CardStyle = styled(Grid)(({theme, bgcolor})=>({
    margin:theme.spacing(1),
    padding:theme.spacing(2),
    backgroundColor:bgcolor?.toString(),
    color:theme.palette.primary.contrastText,
    borderStyle:"solid",
    borderRadius:theme.spacing(1),
    borderColor:colors[5],
}))

interface Props{
    title:string,
    color:string,
}

export default function MethodologyCard({title, color}:Props) {
    const theme = useTheme()
    return (
        <CardStyle 
            item container 
            xs={12} sm={4} md={3} 
            justifyContent="center" alignItems="center" 
            wrap="nowrap"
            bgcolor={color}
        >
            <Typography variant="subtitle2" fontSize={14}>{title}</Typography>
        </CardStyle>
    )
}