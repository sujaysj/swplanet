import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name , id, image, handleShow }) => {
    return(
        <Link to={`/${id}`} onClick = {handleShow}>
            <div className='cards dib br3 pa3 ma3 grow'>
                <h1> {name} </h1>
                <img src={require(`../Assets/PlanetImages/${id}.webp`)} alt = {`${name}`} style={{height:'80%', width:'80%', objectFit:'contain', }}></img>
            </div>
        </Link>

    )
}

export default Card;