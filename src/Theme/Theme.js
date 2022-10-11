
import { createTheme } from "@mui/material";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
export const theme = createTheme({

      palette: {
        btnerror: createColor('#F40B27')
      
      },
    components: {
        MuiButton: {
          variants: [
            {
              props: { variant:'contained'},
              style: {
               fontSize:"2rem"
              },
            },
            {
              props: {color: 'warning' },
              style: {
                color: "white" ,
                backgroundColor:"red"
              },
            },
            {
              props: { color: 'primary' },
              style: {
            
                color: "white" ,
                backgroundColor:"black",
                "&:hover":{
                    color: "black" ,
                    backgroundColor:"white"
                }
              },
            },
          ],
          defaultProps:{
            disableElevation:true,
            disableFocusRipple:true,
            disableRipple:true,
            disableTouchRipple:true
          }
        },
      },

});