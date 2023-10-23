import Icons from "@/assets/icons"
import { Grid, Typography, styled } from "@mui/material"
import { useTranslation } from "next-i18next"
import Image from "next/image"


const GridItem = styled(Grid)(()=>({
    scrollSnapAlign:"start",
    width:"100vw",
    height:"100vh",
    padding:"8vh"
}))

const Container = styled(Grid)(()=>({
    width:"50%",
    paddingTop:"2vh",
    height:"100%",

}))

export default function MethodologySection() {
    const {t} = useTranslation()
    return (
        <GridItem item container direction={"column"} wrap="nowrap">
            <Grid item container>
                <Typography variant="h3">Explicar sobre a metodologia</Typography>
            </Grid>

            <Grid item container direction={"row"} height={"100%"}>
                <Container item container direction={"column"}>
                    <Typography variant="h4">Explicar sobre a metodologia</Typography>
                    <Typography paddingTop={"2vh"}>{t("How I work 3")}</Typography>
                </Container>

                <Container item container direction={"column"} alignContent={"center"} justifyContent={"center"}>
                    <Image
                        alt="Agile Methodology Image"
                        src={Icons.Cicle}
                    />
                </Container>

            </Grid>
        </GridItem>
    )
}