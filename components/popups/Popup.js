import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  container: {
    marginTop: theme.spacing.unit*4,
    marginBottom: theme.spacing.unit*2,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const Popup = (props) => {
  const { classes, children, open, id, title, toggle } = props;

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => toggle(false, id)}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => toggle(false, id)} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

<DialogContent>
      <Grid container justify="center" className={classes.container}>
        {children}
      </Grid>
      </DialogContent>
    </Dialog>
  );
};

Popup.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(Popup);