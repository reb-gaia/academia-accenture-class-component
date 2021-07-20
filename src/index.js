import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    texto: "Turma React"
  }

  handleClick() {
    alert("Alerta ativado!");
  }

  handleTextChanged(e) {
    this.setState({
        texto: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World {this.props.name}</h1>
        <h2>{this.state.texto}</h2>
        <input type="text" onChange={this.handleTextChanged.bind(this)}></input>
        <button onClick={this.handleClick.bind(this)}>Exibir Alerta</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App name={"Rebeca Gaia"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

