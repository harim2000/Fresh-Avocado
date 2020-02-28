import React, { Component } from 'react';
import "./css/NavBar.css";
import { Link } from 'react-router-dom';
import {slide as Menu} from "react-burger-menu";

export default class NavBar extends Component{

    showSettings (event) {
        event.preventDefault();
    }

    render(){
        return(
            <div className="navBar">
                <Link to="/"><img className="logo" src={require("./images/avocado.png")} /></Link>
                <Menu 
                    right 
                    width={"350px"}
                    pageWrapId={"page-wrap"}
                    outerContainerId={"wholeApp"}
                >
                    <Link className="link" to="/"></Link>
                    <Link className="link" to="/resources">Resources</Link>
                    <Link className="link" to="/#Background" >Project Background</Link>
                    <Link className="link" to="/#Problem">Problem Statement</Link>
                    <Link className="link" to="/#Solution">Solution</Link>
                    <Link className="link" to="/#AboutUs">About Us</Link>
                    <Link className="link" to="/#Team">The Team</Link>
                    <Link className="link" href="/#ContactUs">Contact Us</Link>
                    <a onClick={ this.showSettings } className="menu-item--small" href=""></a>
                </Menu>
            </div>
        );
    }
}
