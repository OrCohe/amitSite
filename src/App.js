import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class App extends Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header name={'Or'} />
        <div>
          <div style={{ float: 'left', width: '25%' }}>
            <List
              component="nav"
              subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
              className={classes.root}
            >
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText inset primary="Sent mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText inset primary="Drafts" />
              </ListItem>
              <ListItem button onClick={this.handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary="Inbox" />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
          <div style={{ float: 'right', width: '75%', padding: '20px', boxSizing: 'border-box' }}>
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
            fewfwefwefwefwefwefweafwafwefwaef <br />
          </div>
        </div>
        <Footer name={"Or"} />
      </div>
    );
  }
}

export default withStyles(styles)(App);;
