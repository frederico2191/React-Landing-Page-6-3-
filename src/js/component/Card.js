import React from "react";
import image from '../../img/rigo-baby.jpg'

const Card = ({cardTitle, cardContent, cardUpdate}) => {
    // return (<div>hello! CARD!!</div>)


    return (
        <div>
        <div className="card mb-3 col-12">
        <img src={image} className="card-img-top" alt="Image Alternative Description"/>
    <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{cardContent}</p>
        <p className="card-text"><small className="text-muted">{cardUpdate}</small></p>
    </div>
    </div>
    </div>
    )
}

export default Card;