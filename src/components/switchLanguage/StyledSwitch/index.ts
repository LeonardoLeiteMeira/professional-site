import { styled, Switch } from "@mui/material";

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

export default StyledSwitch