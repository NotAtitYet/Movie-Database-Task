import React, { useState } from "react";
import { Modal, show, Button } from 'react-bootstrap';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieItem = ({ name, title, poster_path, overview, vote_average, release_date, original_language }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (

        <div className="Item">

            <div className="b1">
                <img src={API_IMG + poster_path} className="image"></img>
            </div>

            <div className="b2">

                <h1 id="title" className="block">{name ? name : title}</h1>
                <h4>Date of Release : {release_date}</h4>
                <h5>IMDb : {vote_average}</h5>
                <h5>Language : {original_language}</h5>


                <button type="button" className="btn-dark" onClick={handleShow} >View More</button>

                <Modal show={show} onHide={handleClose}>


                    <Modal.Header closeButton className="Modal-header">
                        <Modal.Title></Modal.Title>
                    </Modal.Header>


                    <Modal.Body id="Modal-Body">
                        <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + poster_path} />
                        <h3 className="Modal-title">{title}</h3>
                        <h4 className="Modal-body-element">IMDb: {vote_average}</h4>
                        <h5 className="Modal-body-element">Release Date: {release_date}</h5>
                        <br></br>
                        <h6 className="Modal-body-element">Overview</h6>
                        <p className="modal-overview">{overview}</p>
                    </Modal.Body>

                    
                    <Modal.Footer className="Modal-Footer">
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>

        </div>

    );


}
export default MovieItem;