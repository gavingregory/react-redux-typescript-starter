import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'redux/store';
import TodoContainer from 'components/TodoContainer';

import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

interface Props { }

const App: React.SFC<Props> = () => (
  <div>
    <AppBar title="React App" showMenuIconButton={false} />
    <TodoContainer />
  </div>
);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('react')
);
