import React from "react";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function RestView() {
  
  const {id}=useParams() //used to get parameter passed in URL (useParams())hook
  console.log("parameter data");
  console.log(id);
  
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const allRestuarant=useSelector((state)=>state.resturantSlice.allResturant.restaurants);
  console.log("allRestuarant");
  console.log(allRestuarant);
  
  
  const selectedResturant=allRestuarant?.find((item)=>item.id==id)
  console.log(selectedResturant);
  

  return (
    <>
      <Row className="mt-5 mb-5">
        <Col md={1}></Col>
        <Col md={3}>
          <img
            src={selectedResturant.photograph}
            width="100%"
            height="380px"
            alt="photos"
            className="rounded"
          />
        </Col>
        <Col md={7} className="px-5">
          <hr />
          <h5 className="text-center">
            Restaurant <span className="text-warning">Details</span>
          </h5>
          <hr />
          <ListGroup>
            <ListGroup.Item className="text-center p-2">
              <h5><span className="text-warning"> {selectedResturant.name} </span> Restaurant</h5>
            </ListGroup.Item>
            <ListGroup.Item>Neighbourhood: {selectedResturant.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Address: {selectedResturant.address}</ListGroup.Item>
            <ListGroup.Item>Cuisine Type: {selectedResturant.cuisine_type}</ListGroup.Item>
            <ListGroup.Item className="text-center p-3 mb-3">
              <button className="btn btn-warning" onClick={handleShow}>
                Operating Hours
              </button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    <ListGroup.Item>Monday: {selectedResturant.operating_hours.Monday}</ListGroup.Item>
                    <ListGroup.Item>Tuesday: {selectedResturant.operating_hours.Tuesday}</ListGroup.Item>
                    <ListGroup.Item>Wednesday: {selectedResturant.operating_hours.Wednesday}</ListGroup.Item>
                    <ListGroup.Item>Thursday: {selectedResturant.operating_hours.Thursday}</ListGroup.Item>
                    <ListGroup.Item>Friday: {selectedResturant.operating_hours.Friday}</ListGroup.Item>
                    <ListGroup.Item>Saturday: {selectedResturant.operating_hours.Saturday}</ListGroup.Item>
                    <ListGroup.Item>Sunday: {selectedResturant.operating_hours.Sunday}</ListGroup.Item>
                  </ListGroup>
                </Modal.Body>
              </Modal>

              <button
                className="btn btn-warning ms-3"
                onClick={() => setOpen(!open)}
              >
                Click Here to see Reviews
              </button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row>
        <Col md={4}></Col>
        <Col md={7}>
          <Collapse in={open}>
          
            <div className="">
             
             {
              selectedResturant?.reviews?.length>0?
              selectedResturant?.reviews?.map((rev)=>(
                <div>
                  <hr />
                  <div className="mt-2">
              <h6>{rev.name} - {rev.date}</h6>
              <p>Rating: {rev.rating}</p>
              <p>Description: {rev.comments}</p>
             </div>

                </div>
              )):
              <p>nothing to display</p>


             }
           
            </div>
          </Collapse>
        </Col>
      </Row>
    </>
  );
}

export default RestView;
