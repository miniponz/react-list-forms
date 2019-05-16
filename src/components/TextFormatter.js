import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: 'type here',
    color: 'black',
    font:'Arial'
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

  handleFontChange = ({ target }) => {
    this.setState({ font: target.value });
  }

  render() {
    const {
      text,
      color,
      font
    } = this.state;

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <select name="font" onChange={this.handleFontChange}>
          <option value={'Arial, Helvetica, sans-serif'}>Arial</option>
          <option value={'Times New Roman, Times, serif'}>Times</option>
          <option value={'Courier New, Courier, monospace'}>Courier</option>
        </select>
        <input type="color" onChange={this.handleColorChange}/>
        <input name="text" value={text} onChange={this.handleTextChange} type="text" />
        <button>Enter</button>
      </form>
      <div>
        <p style={{ color: color, fontFamily: font }}>{text}</p>
      </div>
      </>
    );
  }
}


