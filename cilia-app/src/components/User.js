import React from "react";
import "./User.scss";

import Automakers from "./Automakers";
import Vehicle from "./Vehicle";
import Mymap from "./Map";
import Header from "./Header";

const User = () => {
  return (
    <>
      <div className="display--content">
        <Header />
        <Automakers />
        <div style={{ float: "left" }}>
          <Vehicle />
        </div>
        <div style={{ float: "right" }}>
          <Mymap />
        </div>
      </div>
    </>
  );
};

export default User;
