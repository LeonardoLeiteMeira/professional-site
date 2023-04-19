import { Grid, useTheme } from "@mui/material";
import { useTranslation } from "next-i18next";
import NavigationArrow from "../navigationArrow";

interface Props{
    currentPage:number
    lastPage:number
    handlePageUp:() => void
    handlePageDown:() => void
}

export default function DetailsNavigation({currentPage,lastPage, handlePageUp, handlePageDown}:Props){
    const theme = useTheme()
    const {t} = useTranslation("common")

    return (
        <Grid item container direction={"column"} width="100vw" padding={theme.spacing(3)}>
            <NavigationArrow
                onClick={handlePageUp}
                show={currentPage===1}
                text={t("Previous")}
                arrowOrientation="up"
            />

            <NavigationArrow
                onClick={handlePageDown}
                show={currentPage===lastPage}
                text={t("Next")}
                arrowOrientation="down"
            />
        </Grid>    
    )
}