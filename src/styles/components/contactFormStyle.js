import {
    baseColor,
    whiteColor,
    } from '../base';
    
    export default (theme) => ({
        root: {
            '& > *': {
              margin: theme.spacing(1),
              width: '100%',
            },
            padding:"0 5%",
          },
          button:{
            background: baseColor[0],
            color:whiteColor,
            padding:"15px 0",
            "&:hover":{
              background: baseColor[1],
            }
          },
          
          emailSent:{
            background: "#4CAF50",
            color:whiteColor,
            padding:"10px 0",
            "&:hover":{
              background: "#4CAF50",
            }
          },
          
    });
    
    