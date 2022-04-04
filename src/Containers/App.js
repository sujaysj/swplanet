import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList.js';
import PlanetModal from '../Components/PlanetModal.js';
import SearchBox from '../Components/SearchBox.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  // constructor() {
  //   super()
  //   this.state = {
  //     planets: [],
  //     currentId: ''
  //   }
  // }
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
      navigate('/');
    }
    const handleShow = (event) => setShow(true);

  const [planets, setPlanets] = useState([]);

  const [searchfield, setSearch] = useState('');
    const handleSearch = (event) => {setSearch(event.target.value)}

  useEffect(() => {
  
    async function planetFetch () {
      let tempPlanets = [];
      let response = await fetch("https://swapi.dev/api/planets/");
      let data = await response.json();
      tempPlanets = tempPlanets.concat(data.results);
      
      async function populate () {
        while (data.next) {
          response = await fetch(data.next);
          data = await response.json();
          tempPlanets = tempPlanets.concat(data.results);
        }
      }
      await populate();

      let imgPlanets = tempPlanets.map((planet, i) => {
        let imgPlanet = { ...planet, image: `../Assets/Images/${i}.webp` }
        return imgPlanet;
      })


      setPlanets([...imgPlanets]);
    }

  planetFetch();
  }, [])

    if (!planets.length) {
      return (<h1> Loading </h1>);
    } else {
        const showState = show;
        const array = planets;
        const filteredPlanets = array.filter(planet => {
          return planet.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className="App">
              <h1 className='title'> Star Wars Planet Gallery </h1>
              <SearchBox searchChange = {handleSearch} />
              <CardList planets = {filteredPlanets} handleShow = {handleShow} />
            
            <Routes>
              <Route 
                exact path="/:id" 
                element=
                  {
                    <PlanetModal show = {showState} handleShow = {handleShow} handleClose = {handleClose} planets = {filteredPlanets} />
                  } 
              />
            </Routes>
            </div>
        );
    }
  }
// function Info() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h1> {id} </h1>
//     </div>
//   );
// }
export default App;
