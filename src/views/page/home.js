import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import homePageStyle from '../../styles/components/home';


const HomePage = (props)=>{
const { classes } = props;

return(
    <div 
    className={classes.root}
    >
        <Typography variant="h1">
            Hello Hoteria
        </Typography>
    </div>
)};

export default withStyles(homePageStyle)(HomePage);
