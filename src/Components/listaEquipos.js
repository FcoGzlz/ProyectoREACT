import React, { Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default class ListaEquipos extends Component {
  state = {
    equipos: []
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/equipo").then(lista => {
      this.setState({ equipos: lista.data });
    });
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">Lista Equipos</div>
        <div className="card-body">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Numero de jugadores</th>
              </tr>
            </thead>
            <tbody>
              {this.state.equipos.map(equipos => (
                <tr key={equipos.id}>
                  <td>{equipos.id}</td>
                  <td>{equipos.nombre}</td>
                  <td>{equipos.cantidadJugadores}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
