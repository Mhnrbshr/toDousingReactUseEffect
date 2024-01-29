import React, { useContext, useState } from "react";
import { Button, Navbar, ToggleButton } from "react-bootstrap";
import "./taskbar.css";
import { Theme } from "./themeContext/ThemeContext";
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate()
    
    const counter=() => {
    
        navigate("/");
      }
 
    const {style,Changecolor} = useContext(Theme)

  return (
    <Navbar className={`${style}  common`}>
      task bar
      <span className="buttn">
        <ToggleButton id={""} value={""} onClick={Changecolor}>
          chng theme
        </ToggleButton>
        <Button onClick={counter}>LogOut</Button>
      </span>
    </Navbar>
  );
};

export default Nav;
