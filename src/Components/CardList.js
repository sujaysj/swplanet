import React from 'react';
import Card from './Card.js';

const CardList = ({ planets, idSetter, handleShow}) => {
    
    const cardsArray = planets.map((planet, i) => {
        return <Card {...planets[i]} id = {i} key = {JSON.stringify(planets[i].name)} idSet = {idSetter} handleShow = {handleShow} />
    })
    return (
        <div className = 'cardList' >
            {cardsArray}
        </div>
    );
}

export default CardList;