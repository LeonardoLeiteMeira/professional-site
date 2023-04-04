import { Box, Grid, styled, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router"

const StyledSwitch = styled(Switch)(({ theme }) => ({
  minWidth:theme.spacing(4),
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor:'#aab4be',
    borderRadius: 10,
  },
}));

const Flag = styled(Typography)(({theme})=>({
    minWidth:theme.spacing(4),
    marginRight:theme.spacing(1),
    marginLeftt:theme.spacing(1),
}))

export default function SwitchLanguage(){
    const {locale, locales, push} = useRouter()
    const [isEnglish, setIsEnglish] = useState<boolean>(locale==="en")

    // const useReducer = 

    // const reducer = (state, action)=>{
      
    // }

    const handleChange = ()=>{
      setIsEnglish(oldValue=>{
        let newValue = !oldValue
        push("/",undefined,{locale:newValue?locales![0]:locales![1]})
        return newValue
      })
    }

    return (
      <Box width={"100vw"} display="flex" justifyContent="flex-end">
        <Grid display={"flex"} flexDirection={"row"} alignItems="center">
          <Flag            
            variant={isEnglish?"h4":"h6"}
          >
            🏴󠁧󠁢󠁥󠁮󠁧󠁿 
          </Flag> 

          <StyledSwitch checked={!isEnglish} onChange={handleChange} size="medium"/>

          <Flag
            variant={isEnglish?"h6":"h4"}
          >
            🇵🇹
          </Flag>
        </Grid>
      </Box>
    )
}