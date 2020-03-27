import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Modal.css';
import Carousel3 from './Carousel3';

export class Modal3 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>InvFind</h4>
        {/* <img src = {p1} alt="1"/> */}
        <div className="carousel">
          <Carousel3></Carousel3>
          </div>
        <h5><i>Machine Learning, TensorFlow, Python, Flask, HTML, CSS</i></h5>
        <p>
        A machine learning based app 
      created to encourage Ontarians to help in the process of finding and removing species that are 
      invasive and harmful to natural ecosystems. Uses a neural network to identify whether or not an 
      image submitted contains an invasive species. <br/>
      <a href="https://github.com/TheAndrew2115/DeltaHacks" target="_blank">Check it out on GitHub!</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
        )
    }
}