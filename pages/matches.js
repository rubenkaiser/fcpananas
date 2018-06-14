import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Hidden from "material-ui/Hidden";
import Paper from 'material-ui/Paper';
import Page from './../components/page';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit*4,
    textAlign: 'left'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  tableBodyRow: {
    //Small Screen
    display: "block",
    height: "auto",
    marginTop: 10,
    backgroundColor: "#f2f2f2",

    [theme.breakpoints.up("sm")]: {
      height: 48,
      display: "table-row",
      border: 0,
      backgroundColor: "#ffffff"
    }
  },

  tableBodyCell: {
    display: "block",
    padding: 12,
    fontSize: 14,
    textAlign: "right",
    border: 0,

    // Adding each data table head from here
    "&:before": {
      content: "attr(datatitle)",
      float: "left",
      fontWeight: 600,
      color: "#00000"
    },

    [theme.breakpoints.up("sm")]: {
      display: "table-cell",
      padding: "20px 24px",
      fontSize: 14,
      textAlign: "left",
      borderBottom: "1px solid #ccc",

      "&:before": {
        content: "",
        display: "none"
      }
    }
  }
});


class Matches extends React.Component {
  render() {
    const { classes } = this.props;

    const pouleA = {
      teams: [
        { name: 'Zilverzand', lockerroom: '1'},
        { name: 'FC HALVU', lockerroom: '1'},
        { name: 'Elektromotoren', lockerroom: '1'},
        { name: 'FC Striekplanke', lockerroom: '1'},
        { name: 'FC Pananas', lockerroom: '2'}
      ],
      schedule: [
        {time: "11:00", home: "Zilverzand", away: "FC H.A.L.V.U.", location: "Panadome"},
        {time: "11:25", home: "Elektromotoren", away: "FC Striekplanke", location: "Colloseum"},
        {time: "11:50", home: "FC Pananas", away: "Zilverzand", location: "Bosatlas Theater"},
        {time: "12:15", home: "FC H.A.L.V.U.", away: "Elektromotoren", location: "Panadome"},
        {time: "12:40", home: "FC Striekplanke", away: "FC Pananas", location: "Colloseum"},
        {time: "13:05", home: "Zilverzand", away: "Elektromotoren", location: "Bosatlas Theater"},
        {time: "13:30", home: "FC Pananas", away: "FC H.A.L.V.U.", location: "Panadome"},
        {time: "13:55", home: "FC Striekplanke", away: "Zilverzand", location: "Colloseum"},
        {time: "14:20", home: "Elektromotoren", away: "FC Pananas", location: "Bosatlas Theater"},
        {time: "14:45", home: "FC H.A.L.V.U.", away: "FC Striekplanke", location: "Panadome"},
      ]
    };
  
    const pouleB = {
      teams: [
        { name: 'FC Bananas', lockerroom: '2'},
        { name: 'Dames Zwartemeerse boys', lockerroom: 'Gymlokaal'},
        { name: 'FC Sneeuwbal', lockerroom: '2'},
        { name: 'Purit', lockerroom: '3'},
        { name: 'Red Bull Lipzig', lockerroom: '3'}
      ],
      schedule: [
        {time: "11:00", home: "FC Bananas", away: "Dames Zwartemeerse boys", location: "Colloseum"},
        {time: "11:25", home: "FC Sneeuwbal", away: "Purit", location: "Bosatlas Theater"},
        {time: "11:50", home: "Red Bull Lipzig", away: "FC Bananas", location: "Panadome"},
        {time: "12:15", home: "Dames Zwartemeerse boys", away: "FC Sneeuwbal", location: "Colloseum"},
        {time: "12:40", home: "Purit", away: "Red Bull Lipzig", location: "Bosatlas Theater"},
        {time: "13:05", home: "FC Bananas", away: "FC Sneeuwbal", location: "Panadome"},
        {time: "13:30", home: "Red Bull Lipzig", away: "Dames Zwartemeerse boys", location: "Colloseum"},
        {time: "13:55", home: "Purit", away: "FC Bananas", location: "Bosatlas Theater"},
        {time: "14:20", home: "FC Sneeuwbal", away: "Red Bull Lipzig", location: "Panadome"},
        {time: "14:45", home: "Dames Zwartemeerse boys", away: "Purit", location: "Colloseum"}
      ]
    };
  
    const pouleC = {
      teams: [
        { name: 'T Dopje', lockerroom: '3'},
        { name: 'Foekens VOF', lockerroom: '3'},
        { name: 'Kanslozen', lockerroom: '4'},
        { name: '7 bamischijven sate', lockerroom: '4'},
        { name: 'De kuikens', lockerroom: '4'}
      ],
      schedule: [
        {time: "11:00", home: "T Dopje", away: "Foekens VOF", location: "Bosatlas Theater"},
        {time: "11:25", home: "Kanslozen", away: "7 bamischijven sate", location: "Panadome"},
        {time: "11:50", home: "De Kuikens", away: "T Dopje", location: "Colosseum"},
        {time: "12:15", home: "Foekens VOF", away: "Kanslozen", location: "Bosatlas Theater"},
        {time: "12:40", home: "7 bamischijven sate", away: "De Kuikens", location: "Panadome"},
        {time: "13:05", home: "T Dopje", away: "Kanslozen", location: "Colosseum"},
        {time: "13:30", home: "De Kuikens", away: "Foekens VOF", location: "Bosatlas Theater"},
        {time: "13:55", home: "7 bamischijven sate", away: "T Dopje", location: "Panadome"},
        {time: "14:20", home: "Kanslozen", away: "De Kuikens", location: "Colosseum"},
        {time: "14:45", home: "Foekens VOF", away: "7 bamischijven sate", location: "Bosatlas Theater"},
      ]
    };

    return (
      <Page title="Schedule" subtitle="Poule indeling en wedstrijdschema">

        <Paper className={classes.paper} elevation={4}>

          { /* POULE A */ }

          <Typography gutterBottom variant="headline" component="h2">
            Poule A
          </Typography>

          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell>Kleedkamer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pouleA.teams.map((team, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {team.name}
                    </TableCell>
                    <TableCell numeric>{team.lockerroom}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <br/><br/>
          <Typography gutterBottom variant="headline" component="h4">
            Poule A schedule
          </Typography>

          <Table className={classes.table}>
            <Hidden only="xs">
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Home</TableCell>
                  <TableCell>Away</TableCell>
                  <TableCell>Field</TableCell>
                </TableRow>
              </TableHead>
            </Hidden>
            <TableBody>
              {pouleA.schedule.map((match, i) => {
                return (
                  <TableRow className={classes.tableBodyRow} key={i}>
                    <TableCell datatitle="Time" className={classes.tableBodyCell} component="th" scope="row">
                      {match.time}
                    </TableCell>
                    <TableCell datatitle="Home" className={classes.tableBodyCell} >{match.home}</TableCell>
                    <TableCell datatitle="Away" className={classes.tableBodyCell} >{match.away}</TableCell>
                    <TableCell datatitle="Location" className={classes.tableBodyCell} >{match.location}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          { /* POULE B */ }
          <br/><br/>
          <Typography gutterBottom variant="headline" component="h2">
            Poule B
          </Typography>

          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell>Kleedkamer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pouleB.teams.map((team, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {team.name}
                    </TableCell>
                    <TableCell numeric>{team.lockerroom}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <br/><br/>
          <Typography gutterBottom variant="headline" component="h4">
            Poule B schedule
          </Typography>

         <Table className={classes.table}>
            <Hidden only="xs">
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Home</TableCell>
                  <TableCell>Away</TableCell>
                  <TableCell>Field</TableCell>
                </TableRow>
              </TableHead>
            </Hidden>
            <TableBody>
              {pouleB.schedule.map((match, i) => {
                return (
                  <TableRow className={classes.tableBodyRow} key={i}>
                    <TableCell datatitle="Time" className={classes.tableBodyCell} component="th" scope="row">
                      {match.time}
                    </TableCell>
                    <TableCell datatitle="Home" className={classes.tableBodyCell} >{match.home}</TableCell>
                    <TableCell datatitle="Away" className={classes.tableBodyCell} >{match.away}</TableCell>
                    <TableCell datatitle="Location" className={classes.tableBodyCell} >{match.location}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

        { /* POULE C */ }
          <br/><br/>
          <Typography gutterBottom variant="headline" component="h2">
            Poule C
          </Typography>

          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell>Kleedkamer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pouleC.teams.map((team, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell component="th" scope="row">
                      {team.name}
                    </TableCell>
                    <TableCell numeric>{team.lockerroom}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <br/><br/>
          <Typography gutterBottom variant="headline" component="h4">
            Poule C schedule
          </Typography>

         <Table className={classes.table}>
            <Hidden only="xs">
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Home</TableCell>
                  <TableCell>Away</TableCell>
                  <TableCell>Field</TableCell>
                </TableRow>
              </TableHead>
            </Hidden>
            <TableBody>
              {pouleC.schedule.map((match, i) => {
                return (
                  <TableRow className={classes.tableBodyRow} key={i}>
                    <TableCell datatitle="Time" className={classes.tableBodyCell} component="th" scope="row">
                      {match.time}
                    </TableCell>
                    <TableCell datatitle="Home" className={classes.tableBodyCell} >{match.home}</TableCell>
                    <TableCell datatitle="Away" className={classes.tableBodyCell} >{match.away}</TableCell>
                    <TableCell datatitle="Location" className={classes.tableBodyCell} >{match.location}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </Paper>
</Page>
);
}
}

Matches.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Matches);