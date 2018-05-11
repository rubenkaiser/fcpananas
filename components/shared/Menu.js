import PropTypes from 'prop-types';
import Link from 'next/link'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import EventIcon from '@material-ui/icons/Event';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import MenuButton from './MenuButton';

const styles = theme => ({
  button: {
    width: 250
  },
  link: {
    textDecoration: 'none',
    color: "rgba(0, 0, 0, 0.87)"
  }
});

const Menu = (props) => {
  const { classes, open, toggleMenu } = props;
  return (
      <div>

          <MenuButton toggle={toggleMenu} />

          <Drawer anchor="right" open={open} onClose={() => toggleMenu(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={() => toggleMenu(false)}
              onKeyDown={() => toggleMenu(false)}
              className={classes.button}
            >
              <List component="nav">
                <Link href="/">
                  <ListItem button>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <a className={classes.link}>Home</a>
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link href="/about">
                  <ListItem button>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <a className={classes.link}>Over ons</a>
                    </ListItemText>
                  </ListItem>
                </Link>
                <Link href="/tournament">
                  <ListItem button>
                    <ListItemIcon>
                      <EventIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <a className={classes.link}>Pananas toernooi</a>
                    </ListItemText>
                  </ListItem>
                </Link>
              </List>
              <Divider />
            </div>
          </Drawer>

      </div>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(Menu);