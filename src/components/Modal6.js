import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Modal.css';
import Carousel6 from './Carousel6';

export class Modal6 extends Component{
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
        <h4>Conway's Game of Life</h4>
        {/* <img src = {p1} alt="1"/> */}
        <div className="carousel">
          <Carousel6></Carousel6>
          </div>
        <h5><i>Java</i></h5>
        <p>
        A GUI-based recreation of Conway's Game of Life, a cellular automaton.<br/>
      <a href="https://github.com/molly-yu/Conway-s-Game-of-Life" target="_blank">Check it out on GitHub!</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
        )
    }
}