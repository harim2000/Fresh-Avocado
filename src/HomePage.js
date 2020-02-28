import React, { Component } from 'react';
import './css/HomePage.css'

import Background from"./homeComponents/Background.js";
import Problem from "./homeComponents/Problem.js"
import Solution from "./homeComponents/Solution.js"
import AboutUs from "./homeComponents/AboutUs.js"
import Team from "./homeComponents/Team.js"
import ContactUs from "./homeComponents/ContactUs.js"

export default class HomePage extends Component{

    render(){
   
        return(
            <div id="page-wrap" className="mainContainer">
                <div className="titleContainer">
                    <h1 className="title">
                        Empowering Students with information towards a better future
                    </h1>
                </div>
                <Background />
                <Problem />
                <Solution /> 
                <AboutUs />               
                <Team />
                <ContactUs />

            </div>
        );
    }
    
}