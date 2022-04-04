import React, { useState, useEffect } from 'react';

export default function Info ({ planet }) {
    const { rotation_period, orbital_period, diameter, gravity, population, residents, films } = planet;



    // const [residentsList, setResidents] = useState([]);
    // const [filmsList, setFilms] = useState([]);

    // useEffect(() => {
    //     async function listsFetch() {
    //         let tempRes = [];
    //         let tempFilms = [];
    //         async function populate() {
    //             tempRes = await retrieveRes(residents);
    //             tempFilms = await retrieveFilms(films);
    //         }
            
    //         await populate();
    //         setResidents(tempRes);
    //         setFilms(tempFilms);
    //     }

    //     listsFetch();
    //     console.log(residentsList);
    //     console.log(filmsList);
    // }, [residents, films, residentsList, filmsList])

    return (
        <div>
            <ul>
                <li>Rotation: {rotation_period} Earth hours</li>
                <li>Orbit: {orbital_period} Earth days</li>
                <li>Diameter: {diameter}</li>
                <li>Gravity: {gravity}</li>
                <li>Population: {population}</li>
            </ul>
        </div>
    );
}

// function retrieveRes(residents) {
//     const resArray = residents.map(async (resident, i) => {
//         let person = await fetch(resident);
//         let data = await person.json();
//         let response = data.name;
//         return (response);
//     })

//     return  resArray;
// }

// function retrieveFilms(films) {
//     const filmArray = films.map(async (film, i) => {
//         let movie = await fetch(film);
//         let data = await movie.json();
//         let response = data.title;
//     })

//     return filmArray;
// }

// function makeUL(array) {
//     let list = document.createElement('ul');

//     array.map((data) => {
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(data));
//         list.appendChild(li);
//     })

//     return list;
// }