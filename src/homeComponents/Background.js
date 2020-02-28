import React, { Component } from 'react';

import "./css/Background.css";
import { backgroundText1, backgroundText2 } from "../text.json"

export default class Background extends Component{

    render(){

        return(
            <div id="Background" className="background textContainer" >
                <div className="allTextContainer">
                    <div>
                        <h2 className="sectionHeader">
                            Background
                        </h2>
                    </div>
                    <p className="mainText">{backgroundText1}</p>
                    <p className="mainText">{backgroundText2}</p>
                </div>
            </div>
        );

    }

}