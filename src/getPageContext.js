import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles';
import green from 'material-ui/colors/amber';
import purple from 'material-ui/colors/purple';

// theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

export default function getPageContext() {
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = {
      theme,
      // This is needed in order to deduplicate the injection of CSS in the page.
      sheetsManager: new Map(),
      // This is needed in order to inject the critical CSS.
      sheetsRegistry: new SheetsRegistry(),
      // The standard class name generator.
      generateClassName: createGenerateClassName(),
    };
  }

  return global.__INIT_MATERIAL_UI__;
}