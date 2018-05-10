import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Page from './../components/page';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit*4
  },
});

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Page title="FC Pananas" subtitle="Optimisme + Fanatisme = Pananisme">

        <Paper className={classes.paper} elevation={4}>
          <Typography gutterBottom variant="headline" component="h2">
            FC Pananas, waar plezier voorop staat
          </Typography>
          <Typography>
            Na een aantal jaren de nodige wedstrijdjes te hebben meegedaan met ZVV de Kloeck besloten een aantal vrienden in 2012 zelf 
            een team samen te stellen. De daad werd bij het woord gevoegd en zo was FC Pananas ontstaan.<br/><br/>
            Sinds de oprichting is FC Pananas actief in zaalvoetbalcompetitie Zwartemeer & Omstreken. Welke na een aantal jaren zelfs
            in beheer van FC Pananas kwam.
            <br/><br/>
            Meer informatie over de competitie Zwartemeer & Omstreken kunt u vinden op de <a alt="ZW&O" title="Zwartemeer & Omstreken" href="http://www.zwartemeerenomstreken.nl">competitiewebsite</a>.
          </Typography>
        </Paper>

      </Page>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);