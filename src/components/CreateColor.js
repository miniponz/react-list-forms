import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  state = {
    name: 'name here',
    hex: '#AAAAAA',
  }

  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, hex } = this.state;
    this.props.addColor({ name, hex });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      name,
      hex,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' type='text' value={name} onChange={this.handleChange}></input>
        <input name='hex' type='color' value={hex} onChange={this.handleChange}></input>
        <button>Add This Color</button>
      </form>
    );
  }
}
