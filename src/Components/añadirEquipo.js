import React, { Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaEquipos from "./listaEquipos";

export default class AñadirEquipo extends Component {
  state = {};
  // state = {
  //   nombre: "",
  //   cantidad: 0
  // };

  // handleChangeNombreEquipo = event => {
  //   this.setState({
  //     nombre: event.target.value
  //   });
  // };

  // handlechangeCantidadJugadores = event => {
  //   this.setState({
  //     nombre: event.target.value
  //   });
  // };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const equipo = {
      nombreEquipo: this.state.nombre,
      cantidadJugadores: this.state.cantidad
    };

    Axios.post("http://localhost:8080/Equipo", equipo).then(res => {
      console.log(res);
      console.log(res.data);
      alert(res.data.message);
    });
    window.location.reload();
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Agregar Equipo</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="nombre">Ingrese nombre de Equipo</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              <label htmlFor="cantidad">Ingrese la cantidad de jugadores</label>
              <input
                type="number"
                className="form-control"
                id="cantidad"
                name="cantidad"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              <button type="submit" className="btn btn-success purple darken-3">
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
