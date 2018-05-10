import React from 'react';
import Link from 'next/link'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  homeLink: {
    position: 'fixed',
    display: 'block',
    top: 16,
    left: 32
  },
  logo: {
    width: 'auto',
    height: '12vh',
    maxHeight: '200px'
  }
});

const Logo = (props) => {
  const { classes } = props;
  return (
    <Link href="/" as={`${process.env.ASSET_PREFIX}/`}>
      <a className={classes.homeLink}>
        <img className={classes.logo} alt="Home" src={`${process.env.ASSET_PREFIX}/static/logo.svg`} />
      </a>
    </Link>
  );
};

export default withStyles(styles)(Logo);