import React, { Component } from "react";
import "./css/Team.css"

import TeamCard from "./TeamCard.js"

export default class Team extends Component{
    render(){

        return(
            <div id="Team" className="team textContainer">
                <div>
                    <h2 className="sectionHeader">
                        The Team
                    </h2>
                </div>

                <div className="teamContainer">
                    <TeamCard 
                        name="Harim Sanchez"
                        position="Web Dev" 
                        githubLink="https://github.com/harim2000"
                        linkedinLink="https://www.linkedin.com/in/harim-sanchez/" 
                        imageName="harim.jpg"/>

                    <TeamCard 
                        name="Hilton Vo"
                        position="UX Designer" 
                        githubLink="https://github.com/notlih"
                        linkedinLink="https://www.linkedin.com/in/hilt/"
                        imageName="hilton.png" />    

                    <TeamCard 
                        name="Ryan Dang"
                        position="Data Analyst" 
                        githubLink="https://github.com/daaangryan"
                        linkedinLink="https://www.linkedin.com/in/ryandaaang/" 
                        imageName="ryan.png"/>  
                    
                    <TeamCard 
                        name="Daniel In"
                        position="UI Designer" 
                        linkedinLink="https://www.linkedin.com/in/daniel-in/"
                        imageName="daniel.jpg" /> 
                    
                </div>

            </div>
        );

    }
}