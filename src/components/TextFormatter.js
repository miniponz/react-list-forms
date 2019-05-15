import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: 'type here',
    color: 'black'
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  render() {
    const {
      text,
      color
    } = this.state;

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="color" onChange={this.handleColorChange}/>
        <input name="text" value={text} onChange={this.handleTextChange} type="text" />
        <button>Enter</button>
      </form>
      <div>
        <p style={{ color: color }}>{text}</p>
      </div>
      </>
    );
  }
}

{/* <select onChange={this.handleColorChange}>
<option value={'black'}>black</option>
<option value={'blue'}>blue</option>
<option value={'red'}>red</option>
</select> */}
