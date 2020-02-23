import React, {Component} from 'react';
import "./AboutUs.css"
import {aboutUsText} from "./text.json";

export default class AboutUs extends Component{

    render(){
        return(
            <div className="wholeContainer">
                <div className="titleContainer">
                    <h1 className="title text">
                        About Us
                    </h1>
                </div>
                <div className="mainContainer">
                    <div className="mainTextContainer">
                        <p className="text mainText">{aboutUsText}</p>
                        <p className="text mainText bold">Team Members:</p>
                    </div>
                    <div className="teamContainer">
                        <div id="Ryan">
                            <h2>
                                Ryan
                            </h2>
                            <img className="teamMember" src={require("./images/ryan.png")}/>
                            <h3>Data Analyst</h3>
                        </div>
                        <div id="Daniel">
                            <h2>
                                Daniel
                            </h2>
                            <img className="teamMember" src={require("./images/daniel.jpg")}/>
                            <h3>UI Design</h3>
                        </div>
                        <div id="Hilton">
                            <h2>
                                Hilton
                            </h2>
                            <img className="teamMember" src={require("./images/hilton.png")}/>
                            <h3>UX Designer</h3>
                        </div>
                        <div id="Harim">
                            <h2>
                                Harim
                            </h2>
                            <img className="teamMember" src={require("./images/harim.jpg")}/>
                            <h3>Web Developer</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}