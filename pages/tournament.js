import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import Page from './../components/page';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit*4,
    textAlign: 'left'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class Tournament extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Page title="Pananas Toernooi Nr 6" subtitle="16 juni 2018 | 15 teams, 1 gedachte">

        <Paper className={classes.paper} elevation={4}>
          <Typography gutterBottom variant="headline" component="h2">
            We zitten vol! 15 teams gaan de strijd aan
          </Typography>
          <Typography paragraph>
           Het deelnemersveld was zo gevuld, 15 teams gaan de gezelligste dag van het jaar beleven bij het Pananas toernooi
           <br/>
           Toch een vraag? stuur een bericht via de <a target="_blank" href="https://www.facebook.com/events/1543500995687266/">Facebook pagina</a>.
          </Typography>

          <Typography gutterBottom variant="headline" component="h2">
            Kosten, betaling en wat krijg je ervoor?
          </Typography>
          <Typography paragraph>
           De kosten per team bedragen 75 euro, maar hiervoor krijg je wel een hele dag voetbal en spelplezier. Onbeperkt toegang tot het foodcourt, de feesttent en de zonneweide.
           Daarnaast is de overheerlijke vleesschaal voor de aansluitende barbeque inbegrepen (inclusief stokbrood, kruidenboter en salades).
          <br/><br/>
          Aangemelde teams ontvangen een specifieke betalingsinstructie. Deelname is pas definitief na ontvangst van betaling!
          </Typography>

          <Typography paragraph>
            <a href="https://www.facebook.com/events/1543500995687266/" target="_blank" style={{textDecoration: 'none'}}>
              <Tooltip id="tooltip-fab" title="Schrijf je nu in via onze facebook pagina">
                <Button size="large" color="secondary" variant="raised">
                  Schrijf je nu in via onze facebook pagina
                  <AddIcon className={classes.rightIcon}/>
                </Button>
              </Tooltip>
            </a>
          </Typography>

          <Typography gutterBottom variant="headline" component="h2">
            Hoeveel spelers heb ik ongeveer nodig?
          </Typography>
          <Typography paragraph>
           Tijdens het pananas toernooi spelen we 7 tegen 7 (man of vrouw) op een half veld. We adviseren teams om met ongeveer 10 spelers en zoveel mogelijk
           aanhang/supporters te komen. Dit alles volgens de zaalvoetbalregels. Daarnaast zijn er
           wedstrijdleiders aanwezig die, waar nodig, ingrijpen en als scheidsrechter optreden. Echter gaan we er bij het Pananas toernooi 
           vanuit dat eenieder zich van zijn of haar sportiefste kant laat zien.
          </Typography>

          <Typography gutterBottom variant="headline" component="h2">
            Een half veld? Zo groot, dan ga ik moe worden!
          </Typography>
          <Typography paragraph>
           Om dit te voorkomen zijn de wedstrijden tijdens het toernooi slechts 20 minuten lang, is er genoeg tijd om tussendoor bij te komen, en zullen we
           waar nodig helpen vermoeide mensen van het veld te begeleiden.
          </Typography>

        </Paper>

      </Page>
    );
  }
}

Tournament.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tournament);