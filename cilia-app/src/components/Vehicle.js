import React from "react";
import "./Vehicle.scss";

import LogoVW from "../assets/images/logo_vw.svg";

const Vehicle = () => {
  return (
    <div className="vehicle--container">
      <div className="container--group title--vehicle">
        <span className="material-icons directions-car">directions_car</span>
        <div>VEÍCULO</div>
      </div>
      <div className="container--group">
        <img src={LogoVW} alt="logo VW" />
        <p>VOLKSWAGEN POLO (2018) COMFORTLINE 200 TSI 1.0 TSI 2018</p>
      </div>
      <div className="container--group">
        <img src={LogoVW} alt="logo VW" />
        <p>VOLKSWAGEN POLO (2018) COMFORTLINE 200 TSI 1.0 TSI 2018</p>
      </div>
      <div className="container--group">
        <img src={LogoVW} alt="logo VW" />
        <p>VOLKSWAGEN POLO (2018) COMFORTLINE 200 TSI 1.0 TSI 2018</p>
      </div>
      <div className="container--group">
        <img src={LogoVW} alt="logo VW" />
        <p>VOLKSWAGEN POLO (2018) COMFORTLINE 200 TSI 1.0 TSI 2018</p>
      </div>
    </div>
  );
};

export default Vehicle;
