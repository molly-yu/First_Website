import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Modal.css';
import Carousel5 from './Carousel5';

export class Modal5 extends Component{
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
        <h4>Dabble</h4>
        {/* <img src = {p1} alt="1"/> */}
        <div className="carousel">
          <Carousel5></Carousel5>
          </div>
        <h5><i>Java, OOP</i></h5>
        <p>
        A GUI-based, mouse-controlled single player board game,
       known as Dabble. An implemented scoring system ranks players based on word length and time taken.<br/>
      <a href="https://github.com/molly-yu/DabbleGame" target="_blank">Check it out on GitHub!</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
        )
    }
}