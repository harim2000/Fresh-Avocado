import React, { Component } from 'react';
import "./css/Solution.css"

import { solutionStatement1, solutionStatement2, solutionStatement3} from "../text.json"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBullseye, faUsers, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default class Solution extends Component{

    render(){

        return(
            <div id="Solution" className="solution textContainer" >
                <div>
                    <h2 className="sectionHeader">
                        Our Solution
                    </h2>
                </div>
                <p className="mainText">{solutionStatement1}</p>
                <p className="mainText">{solutionStatement2}</p>
                <p className="mainText">{solutionStatement3}</p>
                
                <div className="solutions">
                    <div className="solutionContainer">
                        <h3>Targetted</h3>
                        <FontAwesomeIcon className="solutionIcon" icon={faBullseye} color="white" size="3x"/>
                        <p className="solutionText">Aimed to support over 2,000 students in the South Seattle area</p>
                    </div>
                    <div className="solutionContainer">
                        <h3>Easy to Use</h3>
                        <FontAwesomeIcon className="solutionIcon" icon={faUsers} color="white" size="3x"/>
                        <p className="solutionText">Accessible on multiple platforms and designed for a wide range of ages</p>
                    </div>
                    <div className="solutionContainer">
                        <h3>Fast Support</h3>
                        <FontAwesomeIcon className="solutionIcon" icon={faQuestionCircle} color="white" size="3x"/>
                        <p className="solutionText">4+ mentors available to answer questions</p>
                    </div>
                </div>
            </div>
        );
    }
}