import Icons from "@/assets/icons";
import { Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image"

export default function FlutterCompanies(){
    const isDesktop = useMediaQuery((theme:Theme) => theme.breakpoints.up('md'));
    const theme = useTheme()
    const iconSize = isDesktop?180:130
    const iconSmallSize = iconSize/2
    
    return (
         <Grid item container xs={12} direction="row" padding={theme.spacing(6)} justifyContent={"center"} gap={6}>
                <Grid item container xs={12} sm={4}  direction={"column"} alignItems="center" gap={2}>
                    <Image 
                        src={Icons.Flutter} 
                        alt={"Flutter Ions"}
                        width={iconSize} 
                        height={iconSize}
                    />
                    <Typography variant={"caption"}>Flutter - Google Framework</Typography>
                </Grid>
                <Grid item container xs={12} sm={4} direction="column" width={2*iconSize} alignItems="center">
                    <Grid item container direction={"row"} justifyContent="center" alignContent="center" gap={2}>
                        <Grid item container direction={"column"} width={iconSmallSize}>
                            <Grid item container>
                                <Image 
                                    src={Icons.BMW} 
                                    alt={"BMW Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                            <Grid item container>
                                <Image 
                                    src={Icons.HSBC} 
                                    alt={"HSBC Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container direction={"column"} width={iconSmallSize} gap={0}>
                            <Grid item container>
                                <Image 
                                    src={Icons.Revolut} 
                                    alt={"Revolut Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                            <Grid item container>
                                <Image 
                                    src={Icons.Nubank} 
                                    alt={"Nubank Icon"}
                                    width={iconSmallSize} 
                                    height={iconSmallSize}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography variant={"caption"}>Algumas empresas que adotam o Flutter</Typography>
                </Grid>
            </Grid>
    )
}