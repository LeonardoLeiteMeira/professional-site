import Navbar from "@/components/navbar"
import { Box, Grid, Typography } from "@mui/material"

interface Props{
    project:string
}

export default function ProjectDetailsDesktop({project}:Props){
    return (
        <>
            <Navbar/>
            <Grid item container>
                <Typography variant="h1" fontSize={26}>Titulo do projeto</Typography> 
                <Typography>items de tecnologia</Typography>
            </Grid>

            <Grid container flex={1}>
                <Grid item xs={6}>
                    <Typography>Descricao de produto/negocio</Typography>
                    <Typography>Um texto descritivo aqui</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Descricao Tecnica</Typography>
                    <Typography>Um texto descritivo aqui</Typography>
                </Grid>
            </Grid>

            <Grid container display={"flex"} flexDirection={"column"}>
                <Grid item container flexDirection={"row"} justifyContent={"end"}>
                    <Typography>Menu Anterior</Typography>
                    <p>Icon</p>
                </Grid>

                <Grid item container flexDirection={"row"} justifyContent={"end"}>
                    <Typography>Menu Seguinte</Typography>
                    <p>Icon</p>
                </Grid>
            </Grid>
        </>
    )
}