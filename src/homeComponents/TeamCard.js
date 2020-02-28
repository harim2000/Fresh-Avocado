import React, { Component } from "react";
import "./css/TeamCard.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default class TeamCard extends Component{

    render(){

        let githubIcon = <FontAwesomeIcon className="socialMediaIcon" 
                            icon={faGithub} color="white" size="2x"/>;
        let linkedinIcon = <FontAwesomeIcon className="socialMediaIcon" 
                            icon={faLinkedin} color="white" size="2x"/>;
        let imageName = this.props.imageName;

        return(
            <div className="member">
                <img className="memberImg" src={require('../images/'+imageName)}/>
                <div className="memberInfo">
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.position}</h4>
                    <div className="socialMedia">
                        {this.props.githubLink ? <a href={this.props.githubLink}> {githubIcon} </a> : null}
                        {this.props.linkedinLink ? <a href={this.props.linkedinLink}> {linkedinIcon} </a> : null}
                    </div>
                </div>
            </div>
        );

    }

}