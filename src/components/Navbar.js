import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import './App.css';

export default function Navbar(props) {
   
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} font-weight-bold`}
      >
        <Link
          className={`navbar-brand text-${ props.mode === "light" ? "dark" : "light"}`}
          
          to="/"
        >       
          <h4>{props.title}</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className={`nav-link text-${ props.mode === "light" ? "dark" : "light"}`}
               to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${ props.mode === "light" ? "dark" : "light"}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          <div
            className={`custom-control custom-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
   <div className="container d-flex justify-content-around">
   <button type="button" onClick={()=>props.chgbcolor("blue")} className="btn btn-primary ml-1  rounded-pill">Blue</button>
   <button type="button" onClick={()=>props.chgbcolor("Red")} className="btn btn-danger ml-1  rounded-pill">Red</button>
   <button type="button" onClick={()=>props.chgbcolor("Green")} className="btn btn-success ml-1  rounded-pill">Green</button>
   <button type="button" onClick={()=>props.chgbcolor("yellow")} className="btn btn-warning ml-1  rounded-pill">Yellow</button>
   </div>
       
          <div className="container d-flex justify-content-center pt-2">
            <input
              type="checkbox"
              className="custom-control-input"
              onClick={props.togglemode}
              id="customSwitch1"
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Enable dark mode
            </label>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};


// ${
//   props.mode == "light" ? "dark" : "light"
// }`