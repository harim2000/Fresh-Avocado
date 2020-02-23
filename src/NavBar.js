import React, {Component} from 'react';
import "./NavBar.css";
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import { Link } from 'react-router-dom';

export default class NavBar extends Component{

    render(){
        return(
            <div className="NavBarContainer">
                <div id="logoContainer">
                    <Link to="/home" className="topLinks"><img id="logo" src={require("./images/avocado.png")} alt="avocado logo"/></Link>
                </div>

                <div id="links">
                    <Link className="topLinks" to="#">Resources<FaAngleDown/></Link>
                    <Link className="topLinks" to="#">Mission</Link>         
                    <Link className="topLinks" to="/aboutUs">About Us</Link>
                </div>
            </div>
        );
    }

}