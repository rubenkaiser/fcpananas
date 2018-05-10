import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    menu: {
        position: 'fixed !important',
        top: 24,
        right: 24
    },
    menuIcon: {
        color: '#fff',
        fontSize: '32px'
    }
  });

const MenuButton = (props) => {
    const { classes, toggle } = props;
    return (
        <IconButton className={classes.menu} color="inherit" aria-label="Menu" onClick={ () => toggle(true) }>
            <MenuIcon className={classes.menuIcon} />
        </IconButton>
    );
}

MenuButton.propTypes = {
    classes: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired
};

export default withStyles(styles)(MenuButton);
