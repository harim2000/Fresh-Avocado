import React, {Component} from 'react';
import {homePageText} from "./text.json";
import './HomePage.css'

export default class HomePage extends Component{

    render(){

        var homePageLines = [];
        var lines = homePageText.split("\n")
        for (var line = 0; line < lines.length; line++){
            homePageLines.push(<p className="text mainText">{lines[line]}</p>)
        }

        return(
            <div className="wholeContainer">
                <div className="titleContainer">
                    <h1 className="title text">
                        Empowering Students with information 
                        towards a better future
                    </h1>
                </div>
                <div className="mainTextContainer">
                    {homePageLines}
                </div>
            </div>
        );
    }

}