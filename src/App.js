import { render } from "react-dom";
import React, { Component } from "react";
import AñadirEquipo from "./Components/añadirEquipo";
import EliminarEquipo from "./Components/eliminarEquipo";
import ListaEquipos from "./Components/listaEquipos";
import "bootstrap/dist/css/bootstrap.min.css";

const divStyle = {
  margin: "2%"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="card" style={divStyle}>
            <div className="card-header">Crud Equipo</div>
            <div className="card-body">
              <div className="row" style={divStyle}>
                <div className="col">
                  <AñadirEquipo />
                </div>
              </div>
              <div className="row" style={divStyle}>
                <div className="col">
                  <EliminarEquipo />
                </div>
              </div>
              <div className="row" style={divStyle}>
                <div className="col">
                  <ListaEquipos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
