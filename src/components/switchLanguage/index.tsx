import { Box, Grid, styled, Switch, Typography } from "@mui/material";
import { useRouter } from "next/router"
import React, { useReducer } from 'react';
import Flag from "./Flag";
import StyledSwitch from "./StyledSwitch";

interface State {
  value: boolean;
}  
  
export default function SwitchLanguage(){
  function languageEeducer(state:State):State {
    let newState = {value:!state.value}
    console.log("path",asPath)
    console.log("isEnglish",newState)
    push(`${asPath}`,undefined,{locale: newState.value?locales![0]:locales![1]})
    return newState
  }
  
  const {locales, push, asPath} = useRouter()
  const [isEnglish, isEnglishDispatch] = useReducer(languageEeducer, {value:true})

  return (
    <Box width={"100vw"} display="flex" justifyContent="flex-end">
      <Grid display={"flex"} flexDirection={"row"} alignItems="center">
        <Flag            
          variant={isEnglish.value?"h4":"h6"}
        >
          🏴󠁧󠁢󠁥󠁮󠁧󠁿 
        </Flag> 

        <StyledSwitch checked={!isEnglish.value} onChange={isEnglishDispatch} size="medium"/>

        <Flag
          variant={isEnglish.value?"h6":"h4"}
        >
          🇵🇹
        </Flag>
      </Grid>
    </Box>
  )
}