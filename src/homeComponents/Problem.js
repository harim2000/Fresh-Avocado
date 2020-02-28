import React, { Component } from 'react';
import "./css/Problem.css"

import { problemStatement } from "../text.json"

export default class Problem extends Component{
    render(){
        return(
            <div id="Problem" className="problem textContainer" >
                <div>
                    <h2 className="sectionHeader">
                        Problem We Are Trying To Solve
                    </h2>
                </div>
                <div className="mainProblemContainer">
                    <p className="mainText">{problemStatement}</p>
                    <img className="dreamImg" src={require("../images/Dream-Project.jpg")}/>
                </div>
            </div>

        );
    }
}