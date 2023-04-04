import { styled } from "@mui/material";

const DividerStyled = styled("div")(({ theme }) => ({
    width: "90vw",
    maxWidth:theme.spacing(40),
    height: theme.spacing(0.25),
    backgroundColor: `${theme.palette.secondary.main}`,
    [theme.breakpoints.up("md")]:{
        height: theme.spacing(1),
        borderRadius:"20px"
    }
}));

export default function Divider(){
    return (
        <DividerStyled/>
    )
}