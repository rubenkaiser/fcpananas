import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Popup from './Popup';

const Other = (props) => {
  const { classes, open, toggle } = props;
  return (
    <Popup title="Overige bezigheden" id="other" toggle={toggle} open={open}>
      <div>
        <Typography gutterBottom variant="headline" component="h2">
          Zonneweide
        </Typography>
        <Typography paragraph>
        Naast de fanatieke bezigheden is er bij het Pananas toernooi ook ruimte en tijd voor ontspanning. Geniet van het weer
        in de zonneweide, of neem een plaats met zicht op het veld in bij de grootse buitenbar.
        </Typography>

        <Typography gutterBottom variant="headline" component="h2">
          Kids area
        </Typography>
        <Typography>
          Ook aan de kinderen is gedacht. Met een springkussen en andere spelletjes kunnen ook de kleine Pananas supporters zich
          prima vermaken.<br/>
          Daarnaast is er gedurende de dag gratis ranja voor de kids en mogen ze wat lekkers uitzoeken.
        </Typography>
      </div>
    </Popup>
  );
};

Other.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Other;