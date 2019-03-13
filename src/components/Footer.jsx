import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { ReactComponent as FaceBookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/icons/whatsapp.svg';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
      },
  };

const Header = ({classes, name}) => {
    return (
        <div>
            <AppBar position="static" className={classes.appBar}>
                <BottomNavigation>
                    <BottomNavigationAction label="Recents" icon={<FaceBookIcon style={{display:'inline-block', width:'1em', height: '1em'}}/>} />
                    <BottomNavigationAction label="Favorites" icon={<InstagramIcon style={{display:'inline-block', width:'1em', height: '1em'}}/>} />
                    <BottomNavigationAction label="Nearby" icon={<WhatsAppIcon style={{display:'inline-block', width:'1em', height: '1em'}}/>} />
                </BottomNavigation>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Header);;