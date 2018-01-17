import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { TodoContainer as Todo } from 'components/Todo';
import { MenuContainer as Menu } from 'components/Menu';
import 'semantic-ui-css/semantic.min.css';

import { Container } from 'semantic-ui-react';

interface OwnProps {}

const App: React.SFC<OwnProps> = () => (
  <Container>
    <Menu />
    <Container style={{ marginTop: '7em' }}>
      <Todo />
    </Container>
  </Container>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react')
);
