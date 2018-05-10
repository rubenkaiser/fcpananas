import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import getPageContext from './getPageContext';

import Bg from './../components/shared/Background';
import Logo from './../components/shared/Logo';
import Menu from './../components/shared/Menu';

function withRoot(Component) {
  class WithRoot extends React.Component {
    
    state = {
      menuOpen: false,
      pageContext: getPageContext()
    };

    toggleMenu = (open) => {
      this.setState({
        menuOpen: open,
      });
    }

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.state.pageContext.theme}
          sheetsManager={this.state.pageContext.sheetsManager}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          
          <Bg />

          <Logo />

          <Menu open={this.state.menuOpen}  toggleMenu={this.toggleMenu} />

          <Component {...this.props} />

        </MuiThemeProvider>
      );
    }
  }
  return WithRoot;
}

export default withRoot;