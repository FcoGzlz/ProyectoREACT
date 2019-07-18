import { render } from "react-dom";
import React, { Component } from "react";
import { Formulario } from "./Components/formulario";
import AñadirEquipo from "./Components/añadirEquipo";
import ListaEquipos from "./Components/listaEquipos";
import ListaPatrocinadores from "./Components/listaPatrocinadores";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <div className="card">
            <div className="card-header">hOlA CoLeGa</div>
            <div className="card-body">
            <div className="row">
              <div className="col">
                
                  <ListaEquipos />
                  <AñadirEquipo />
                </div>
                <div className="col">
                  <ListaPatrocinadores />
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
