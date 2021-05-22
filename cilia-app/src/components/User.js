import React from "react";
import "./User.scss";
import { ReactComponent as CiliaLogo } from "../assets/images/logo.svg";

function User() {
  return (
    <>
      <div className="navbar">
        <ul className="nav">
          <li>
            <i className="material-icons"> dehaze </i>
          </li>
          <li>
            <CiliaLogo />
          </li>
          <li>
            <span className="material-icons">help</span>
            Ajuda
          </li>
          <li>
            <span className="material-icons">chat</span>
            Suporte via Chat
          </li>
          <li>
            Diego • Auto/RE - TESTE Administrador
            <span className="material-icons">account_circle</span>
            <span className="material-icons">home</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default User;
