import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Etapa1 from "./components/primeira-etapa";
import Etapa2 from "./components/segunda-etapa";
import Etapa3 from "./components/terceira-etapa";
import Final from "./components/etapa-final";

class App extends React.Component {
  state = {
      etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);