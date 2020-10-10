import React from 'react';
import {Card, Image, Col } from 'react-bootstrap';

function Project(props) {

    return (
        <div className="projectWrapper">
        <div className="projectCard">
            <div className=" cardBody">
                <img src={props.project.header_image} className="header_image"/>
                <div className="cardTitle">{props.project.name}</div>
                {/* <Card.Text className="card">{props.card.short_description.replace(/&quot;/g,'"')}</Card.Text> */}
            </div>
        </div>
        </div>


    )
}

export default Project;