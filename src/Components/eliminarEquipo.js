import React, { Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaEquipos from "./listaEquipos";

export default class EliminarEquipo extends Component {
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
      id: this.state.id
    };

    Axios.delete(`http://localhost:8080/Equipo/${this.state.id}`).then(res => {
      console.log(res);
      console.log(res.data);
      alert(res.data.message);
    });
    window.location.reload(<ListaEquipos />);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Eliminar Equipo</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="cantidad">
                Ingrese la ID del equipo que desea eliminar
              </label>
              <input
                type="number"
                className="form-control"
                id="id"
                name="id"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div>
              <button type="submit" className="btn btn-success purple darken-3">
                Eliminar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
