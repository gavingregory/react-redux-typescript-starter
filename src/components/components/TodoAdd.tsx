import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

interface Props {
  onAdd: (name: string) => void;
}

interface State {
  name: string;
}

export default class TodoAdd extends React.Component<Props, State> {

  constructor (props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { name: '' };
  }

  onChangeName (event) {
    this.setState({ name: event.currentTarget.value });
  }

  onSubmit (event) {
    this.setState({ name: '' });
    this.props.onAdd(this.state.name);
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          hintText="Type a todo"
          fullWidth={true}
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <FlatButton label="Add" primary={true} type="submit" />
      </form>
    );
  }
}
