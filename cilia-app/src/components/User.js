import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";
import Logo from "../assets/images/logo.svg";
import LogoColor from "../assets/images/logo_color.svg";

function User() {
  return (
    <>
      <header>
        <nav>
          <div>
            <div className="dropdown"></div>
            <Link to="#" className="logo-link">
              <img src={Logo} alt="cilia logo" />
            </Link>
          </div>
        </nav>
      </header>
      <div className="navbar">
        <ul className="nav">
          <li>
            <i className="material-icons">help</i>
            Ajuda
          </li>
          <li>
            <i className="material-icons">chat</i>
            Suporte via Chat
          </li>
          <li>
            Diego • Auto/RE - TESTE Administrador
            <i className="material-icons">account_circle</i>
            <i className="material-icons">home</i>
          </li>
        </ul>
      </div>

      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <i className="material-icons"> dehaze </i>
      </button>

      {/* Modal  */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                <img src={LogoColor} alt="cilia logo" />
              </h5>
            </div>
            <div className="modal-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> av_timer </i>
                    Dashboard
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> content_paste </i>
                    Atendimentos (108)
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> alarm_on </i>
                    Reparos (42)
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> directions_car </i>
                    Carros Reserva (56)
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> build </i>
                    Oficinas (42)
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> people </i>
                    Usuários (42)
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> folder_shared </i>
                    Grupos (8)
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> folder_special </i>
                    Permissões (4)
                  </Link>
                </li>
                <li class="list-group-item">
                  <Link className="modal--link" to="#">
                    <i className="material-icons"> settings </i>
                    Configurações
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
