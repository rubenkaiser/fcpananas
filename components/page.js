import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Paper from 'material-ui/Paper';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';

import withRoot from './../src/withRoot';

const styles = theme => ({
  calloutHeader: {
    marginTop: '20vh !important',
    color: '#fff !important',
    fontWeight: 'bold !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    }
  },
  callout: {
    color: '#fff !important'
  },
  container: {
    marginTop: theme.spacing.unit*4,
    marginBottom: theme.spacing.unit*2,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1200,
  }
});

class Page extends React.Component {
  render() {
    const { classes, title, subtitle, children } = this.props;

    return (
      <div>

       <Typography className={classes.calloutHeader} variant="display3" align="center">
          {title}
        </Typography>
        <Typography className={classes.callout} variant="headline" align="center">
          {subtitle}
        </Typography>

        <div justify="center" className={classes.container}>
          {children}
        </div>

      </div>
    );
  }
}

Page.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default withRoot(withStyles(styles)(Page));