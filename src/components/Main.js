import React from "react";
import Search from "./Search";
import Card from "./Card";
// import Background from './images/lasvegas.jpg';
import "font-awesome/css/font-awesome.min.css";

function Main() {
  return (
    <React.Fragment>
      <div className="main" >
        <h1 className="title">Marlon Jay Manuel</h1>
        <Search />
      </div>
      <Card />
    </React.Fragment>
  );
}

export default Main;
