import React, { Component } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListaPtrocinadores extends Component {
  state = {
    patrocinadores: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/Patrocinador/index.json").then(lista => {
      this.setState({ patrocinadores: lista.data });
    });
  }
  render() {
    return (
      
        
          <div className="card">
            <div className="card-header">Lista Patrocinadores</div>
            <div className="card-body">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>Nombre</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.patrocinadores.map(patrocinadores => (
                    <tr key={patrocinadores.id}>
                      <td>{patrocinadores.nombre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        
      
    );
  }
}
