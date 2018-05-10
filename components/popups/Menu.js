import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Popup from './Popup';

const Menu = (props) => {
  const { classes, open, toggle } = props;
  return (
    <Popup title="Food at Pananas" id="menu" toggle={toggle} open={open}>
      <div>
        <Typography gutterBottom variant="headline" component="h2">
          Broodje Pananas
        </Typography>
        <Typography paragraph>
          Bij onze foodtruck kun je genieten van een overheerlijk broodje Pananas. Met smaak bereid door onze 
          vrijwilligers, aan de rand van het foodcourt en de zonneweide te verkrijgen. Naast een broodje Pananas kunt u
          hier ook fris en sportdrank halen.
        </Typography>

        <Typography gutterBottom variant="headline" component="h2">
          Kids bar
        </Typography>
        <Typography>
          Voor de kinderen is er gedurende de dag gratis ranja met wat lekkers te krijgen. Daarnaast is er, bij goed weer, de mogelijkheid om een ijsje
          te kopen bij de ijscokar.
        </Typography>
      </div>
    </Popup>
  );
};

Menu.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Menu;