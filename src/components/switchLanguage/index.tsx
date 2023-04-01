import { Box, Grid, styled, Switch, Typography, useTheme } from "@mui/material";
import { useState } from "react";

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

type OnChange = (language:"English"|"Portuguese")=>void

type Props = {
    selectedLanguage:"English"|"Portuguese"
    onChange:OnChange
}

export default function SwitchLanguage({selectedLanguage,onChange}:Props){
    const [isEnglish, setIsEnglish] = useState<boolean>(selectedLanguage==="English")
    
    const handleChange = ()=>{
      onChange(isEnglish?"English":"Portuguese")
      setIsEnglish(value=>!value)
    }

    return (
      <Box width={"100vw"} display="flex" justifyContent="flex-end">
        <Grid display={"flex"} flexDirection={"row"} alignItems="center">
          <Flag
            variant={isEnglish?"h6":"h4"}
          >
            🏴󠁧󠁢󠁥󠁮󠁧󠁿
          </Flag> 
          <StyledSwitch value={isEnglish} onChange={handleChange} size="medium"/>
          <Flag
            variant={isEnglish?"h4":"h6"}
          >
            🇵🇹
          </Flag>
        </Grid>
      </Box>
    )
}