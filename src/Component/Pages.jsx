import React from "react";
import Nav from "../Component/Nav";
import Allgames from "../Component/Allgames";
import Setting from "./Setting";
import Practice from "./Practice";

function Pages() {
  return (
    <div className="">
      <div>

          <Nav />
          <Allgames />
          <Setting />
        
      </div>
    </div>
  );
}

export default Pages;
