import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Info from './Info.js';

const PlanetModal = ({ show, handleShow, handleClose, planets, children }) => {
    const { id } = useParams();

    return(
      <Modal show={show} onHide={handleClose} className = 'planetmodal'>
        <Modal.Header closeButton>
          <Modal.Title> <h1>{planets[id].name}</h1> </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={require(`../Assets/PlanetImages/${id}.webp`)} alt={planets[id].name} ></img>
          <Info planet = {planets[id]} className = 'info'/>
        </Modal.Body>
      </Modal>
    );
}

export default PlanetModal;