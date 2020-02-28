import React, { Component } from 'react';
import "./css/AboutUs.css"

import { aboutUs } from "../text.json"

export default class AboutUs extends Component{
    render(){
        return(
            <div id="AboutUs" className="aboutUs textContainer">
                <div>
                    <h2 className="sectionHeader">
                        About Us
                    </h2>
                </div>
                <p className="mainText">{aboutUs}</p>
                <div className="imageContainer">
                    <a href="https://ischool.uw.edu/capstone">
                        <img className="iSchoolLogo" src={require("../images/iSchoolLogo.png")}/>
                    </a>
                </div>
            </div>
        );
    }
}