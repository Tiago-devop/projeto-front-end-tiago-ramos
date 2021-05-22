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
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Link to="#">
                <i className="material-icons"> av_timer </i>
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
