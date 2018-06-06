import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from 'material-ui/styles';
import Badge from 'material-ui/Badge';

import Program from './../components/popups/Program';
import Other from './../components/popups/Other';
import Menu from './../components/popups/Menu';

import Page from './../components/page';

const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit*2,
    marginBottom: theme.spacing.unit*2,
    textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    textAlign: 'center',
    marginTop: theme.spacing.unit*2
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  button: {
    paddingTop: theme.spacing.unit*2,
    paddingBottom: theme.spacing.unit*2,
    marginBottom: theme.spacing.unit*2,
    textDecoration: 'none'
  },
  buttonMarginRight: {
    paddingTop: theme.spacing.unit*2,
    paddingBottom: theme.spacing.unit*2,
    marginBottom: theme.spacing.unit*2,
    textDecoration: 'none',
    marginRight: theme.spacing.unit*2
  }
});

class Index extends React.Component {
  state = {
    programOpen: false,
    otherOpen: false,
    menuOpen: false
  };

  toggleDialog = (open, element) => {
    this.setState({
      [`${element}Open`]: open
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Page title="Pananas Toernooi Nr 6" subtitle="16 juni 2018 | 15 teams, 1 gedachte">

        <Program open={this.state.programOpen} toggle={this.toggleDialog} />

        <Other open={this.state.otherOpen} toggle={this.toggleDialog} />

        <Menu open={this.state.menuOpen} toggle={this.toggleDialog} />

        <Grid container>
          <Grid item xs={12} sm={6} lg={4}>

            <Card className={classes.card}>
              <CardContent>
                <div className={classes.center}>
                  <img style={{ 
                        height: '140px',
                        marginTop: '24px',
                        marginBottom: '24px',
                      }}
                      alt="Home"
                      src="static/soccer.svg"
                  />
                </div>
                <Typography gutterBottom variant="headline" component="h2">
                  Voetbal & spel
                </Typography>
                <Typography component="p">
                  Terwijl de deelnemers zich in het zweet werken op het voetbalveld spelen de kinderen op het springkussen. 
                  Het Pananas toernooi is sport en spel voor jong en oud.
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => this.toggleDialog(true, 'program')} size="small" color="primary">
                  Programma
                </Button>
                <Button onClick={() => this.toggleDialog(true, 'other')} size="small" color="primary">
                  Overige bezigheden
                </Button>
              </CardActions>
            </Card>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <Card className={classes.card}>
              <CardContent>
                <div className={classes.center}>
                  <img style={{ 
                        height: '140px',
                        marginTop: '24px',
                        marginBottom: '24px',
                      }}
                      alt="Home"
                      src="static/food.svg"
                  />
                </div>

                <Typography gutterBottom variant="headline" component="h2">
                  Food
                </Typography>
                <Typography component="p">
                  Onze gastvrouwen zullen, vanuit onze eigen foodtruck, de deelnemers van het nodige krachtvoer voorzien.
                  Kinderen krijgen gratis ranja en wat lekkers.
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => this.toggleDialog(true, 'menu')} size="small" color="primary">
                  Menu
                </Button>
              </CardActions>
            </Card>

          </Grid>

          <Grid item xs={12} sm={6} lg={4}>

            <Card className={classes.card}>
              <CardContent>
                <div className={classes.center}>
                  <img style={{ 
                        height: '140px',
                        marginTop: '24px',
                        marginBottom: '24px',
                      }}
                      alt="Home"
                      src="static/party.svg"
                  />
                </div>
                <Typography gutterBottom variant="headline" component="h2">
                  Feest
                </Typography>
                <Typography component="p">
                  Na het laatste fluitsignaal steken we de barbeques aan en genieten we van een hapje en een drankje.
                  Dit terwijl onze DJ's het feest, dat tot in de late uurtjes doorgaat, alvast starten.
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => this.toggleDialog(true, 'program')} size="small" color="primary">
                  Line-up
                </Button>
              </CardActions>
            </Card>

          </Grid>

          <Grid item xs={12} className={classes.actions} >

            <Link href="/tournament">
              <a style={{textDecoration: 'none'}}>
                <Tooltip id="tooltip-fab" title="Meer informatie over ons toernooi">
                  <Button size="large" color="secondary" className={classes.buttonMarginRight} variant="raised">
                    Meer over het toernooi
                    <InfoIcon className={classes.rightIcon}/>
                  </Button>
                </Tooltip>
              </a>
            </Link>

            <Link href="/tournament">
              <a style={{textDecoration: 'none'}}>
                <Tooltip id="tooltip-fab" title="Schrijf je team nu in!">
                  <Badge color="error" badgeContent={0}>
                    <Button size="large" color="primary" className={classes.button} variant="raised">
                      Inschrijven
                      <AddIcon className={classes.rightIcon}/>
                    </Button>
                  </Badge>
                </Tooltip>
              </a>
            </Link>
            
          </Grid>

        </Grid>

      </Page>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);