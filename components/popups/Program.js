import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Popup from './Popup';

const styles = theme => ({
});

const Program = (props) => {
  const { classes, open, toggle } = props;

  const data = [
    { description: "Ontvangst deelnemende teams", time: "10:30"},
    { description: "Opening zonneweide & Foodtruck", time: "11:00"},
    { description: "Programma poulefase", time: "11:00 - 14:30"},
    { description: "Finale wedstrijden", time: "15:00"},
    { description: "Prijsuitreiking", time: "17:00"},
    { description: "Barbeque", time: "aansluitend"},
    { description: "Feest in de tent", time: "18:00 - sluit"},
    { description: "Lineup to be announced", time: ""},
  ];

  return (
    <Popup title="Programma" id="program" toggle={toggle} open={open}>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Event</TableCell>
            <TableCell numeric>Tijd</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e, i) => {
            return (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {e.description}
                </TableCell>
                <TableCell numeric>{e.time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

    </Popup>
  );
};

Program.propTypes = {
  classes: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles)(Program);