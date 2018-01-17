import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State as BaseState, Todo } from 'models';
import { NumberMap } from 'models';
import { FlexColWidth } from 'enums';
import { addTodo } from 'modules/todo';
import { Container, Grid, Menu, Divider, Segment, List, Header } from 'semantic-ui-react';

interface OwnProps {}

class MenuContainer extends React.Component<OwnProps> {
  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            React Redux Example
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default MenuContainer;
