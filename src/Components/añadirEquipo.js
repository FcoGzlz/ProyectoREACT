import React, { Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AñadirEquipo extends Component {
  state = {
    nombre: "",
    cantidad: 3
  };

  handleChangeNombreEquipo = event => {
    this.setState({ nombre: event.target.value });
  };

  handlechangeCantidadJugadores = event => {
    this.setState({ cantidad: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const equipo = {
      nombreEquipo: this.state.nombre,
      cantidadJugadores: this.state.cantidad
    };

    Axios.post("http://localhost:8080/Equipo", equipo)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.res);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nombre Equipo:</label>
        <input
          type="text"
          name="nombre"
          onChange={this.handleChangeNombreEquipo}
        />
        <label>Cantidad de Jugadores:</label>
        <input
          type="number"
          name="cantidad"
          onChange={this.handleChangeCantidadJugadores}
        />
        <button type="submit">¿Agregar?</button>
      </form>
    );
  }
}
