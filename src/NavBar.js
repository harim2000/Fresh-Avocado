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
                    <Link className="link" to="/resources">Resources</Link>
                    <a className="link" href="/#Background" >Project Background</a>
                    <a className="link" href="/#Problem">Problem Statement</a>
                    <a className="link" href="/#Solution">Solution</a>
                    <a className="link" href="/#AboutUs">About Us</a>
                    <a className="link" href="/#Team">The Team</a>
                    <a className="link" href="/#ContactUs">Contact Us</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href=""></a>
                </Menu>
            </div>
        );
    }
}
