import React, { Component } from "react";
import "./css/ContactUs.css"

import {contactUs} from "../text.json"

export default class ContactUs extends Component{
    render(){

        return(
            <div id="ContactUs" className="contactUs textContainer">
                <h2 className="sectionHeader">
                    Contact Us
                </h2>

                <div className="contactForm">
                    <p className="mainText">{contactUs}</p>
                    <a className="mainText emailLink" href="mailto:freshavocado2020@gmail.com">freshavocado2020@gmail.com</a>
                </div>
            </div>
        );
    }
}