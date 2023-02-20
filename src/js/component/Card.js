import React from "react";
import image from '../../img/rigo-baby.jpg'

const Card = () => {
    // return (<div>hello! CARD!!</div>)


    return (
        <div>
        <div className="card mb-3 col-12">


        <img src={image} className="card-img-top" alt="Image Alt"/>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>
    </div>
    )
    }

export default Card;