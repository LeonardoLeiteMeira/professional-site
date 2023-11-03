import { styled } from "@mui/material";

const DividerStyled = styled("div")(({ theme }) => ({
    width: "90vw",
    maxWidth:theme.spacing(40),
    backgroundColor: `${theme.palette.secondary.main}`, 
    height: theme.spacing(1),
    borderRadius:"20px"
}));

export default function Divider(){
    return (
        <DividerStyled/>
    )
}