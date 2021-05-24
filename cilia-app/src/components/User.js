import React from "react";
import { Link } from "react-router-dom";
import "./User.scss";
import Logo from "../assets/images/logo.svg";
import LogoColor from "../assets/images/logo_color.svg";

function User() {
  return (
    <>
      <header className="header-content">
        <div className="modal--main">
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
                    <img
                      className="blue--logo"
                      src={LogoColor}
                      alt="cilia logo"
                    />
                  </h5>
                </div>
                <div className="modal-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> av_timer </i>
                        <p>Dashboard</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> content_paste </i>
                        <p>Atendimentos (108)</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> alarm_on </i>
                        <p>Reparos (42)</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> directions_car </i>
                        <p>Carros Reserva (56)</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> build </i>
                        <p>Oficinas (42)</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> people </i>
                        <p>Usuários (42)</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> folder_shared </i>
                        <p>Grupos (8)</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> folder_special </i>
                        <p>Permissões (4)</p>
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="modal--link" to="#">
                        <i className="material-icons"> settings </i>
                        <p>Configurações</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link to="#" className="logo-link">
            <img src={Logo} alt="cilia logo" />
          </Link>
        </div>

        <div className="help-links">
          <div>
            <i className="material-icons">help</i>
            Ajuda
          </div>
          <div className="line"></div>
          <div>
            <i className="material-icons">chat</i>
            Suporte via Chat
          </div>
          <div className="line"></div>
          <div></div>
        </div>
      </header>
    </>
  );
}

export default User;
