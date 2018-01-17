import * as React from 'react';
import { Button, Header, Input } from 'semantic-ui-react';

interface OwnProps {
  onAdd: (name: string) => void;
}

interface State {
  name: string;
}

export default class TodoAdd extends React.Component<OwnProps, State> {

  constructor (props: OwnProps) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { name: '' };
  }

  onChangeName (event) {
    this.setState({ name: event.currentTarget.value });
  }

  onSubmit (event) {
    event.preventDefault();
    this.setState({ name: '' });
    this.props.onAdd(this.state.name);
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <Header>Add a todo</Header>
        <Input
          placeholder='Type a todo'
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <Button primary type='submit'>Add</Button>
      </form>
    );
  }
}
