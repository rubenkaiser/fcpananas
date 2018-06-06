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
    { description: "Grootse prijzenmarathon", time: "19:00"},
    { description: "Optreden van Gerrit Denekamp", time: "20:00"},
    { description: "Feest in de tent met DJ Arjan", time: "21:00 - sluit"}
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