import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
      
	  typ:{
		  flexGrow: 1,
		  marginLeft: 10
	  },
	  
	card: {
    width:100
  },
	media:{
		height:0,
		paddingTop:'56,25%',
		marginTop:'30'
		
	}
})
const NavBar = () => {
	const classes = useStyles();
    return (
        <div>
		
            <AppBar position="static">
                <Toolbar>
                    
                    <Typography variant="h6" className={classes.typ}>
                        Card Management Application
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
