import React,{Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './Modal.css';
import Carousel2 from './Carousel2';

export class Modal2 extends Component{
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
        <h4>Rubik's Cube Solver</h4>
        {/* <img src = {p1} alt="1"/> */}
        <div className="carousel">
          <Carousel2></Carousel2>
          </div>
        <h5><i>Python, React Native, OpenCV, Java, Arduino</i></h5>
        <p>
        A robotic machine that solves any permutation of a 3x3 Rubik's Cube in less 
      than 25 seconds. A React Native app is used to callibrate the colours in different 
      lighting environments, then scan the colour combinations on the scrambled cube. An 
      optimized solving algorithm was created, then implemented to physically unscramble the cube.<br/>
      <a href="https://github.com/anthony-chang/Rubiks-Cube-Solver" target="_blank">Check it out on GitHub!</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={this.props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
        )
    }

}