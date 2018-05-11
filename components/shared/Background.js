import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  bg: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100vw',
    zIndex: -1,
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(/static/bg.jpg)'
  },
});

const Background = (props) => {
  const { classes } = props;
  return (
    <div className={classes.bg} />
  );
};

Background.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Background);