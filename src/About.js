import React from 'react'
import me from './assets/me4.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .About {
    background-color: #EDD7DE;
    min-height:100vh;
    width:100%;
    position:relative;
    z-index: -2;
    text-align:center;
    padding-top: 65px;
    margin:0;
  }

  h1{
    font-family: "Candara", sans-serif;
    font-weight:500;
    padding:30px;
    text-align:center;
    color:#74535D;
  }
  .text{
    //background-color:white;
    font-family:"Candara", sans-serif;
    color:#74535D;
    margin-left: auto;
    margin-right: auto;
    margin-top:5vh;
    width:90vh;
    text-align:center;
  }

  .overlay{
    position: absolute;
    background-color:#74535D;
    top: 0;
    left: 0;
    right: 0;
    height:65px;
    z-index = -1;
  }
  .overlay2{
    position: absolute;
    background-color:#EDD7DE;
    opacity:0.6;
    top: 13px;
    left: 0;
    right: 0;
    height:39px;
    z-index = -0;
  }
    
  .portrait{
    width:250px;
    height:250px;
    border-radius: 50%;
    padding:0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export const About = () => (
  <Styles>
    <div className="About" id="about">
    <div className="overlay"></div>
    <div className="overlay2"></div>
        <h1>About Me</h1>
        <img src={me} alt="Molly" className="portrait"></img>
        <div className="text">
        <p>Hello! My name is Molly Yu and I am a software developer based
      in Toronto, Canada. I am currently studying Software Engineering at the University of Waterloo, seeking a Winter 2021 Co-op position. I have a strong passion for software development, particularly in Artificial Intelligence and
      Machine Learning.
      <br></br><br></br>In addition to my love for tech, I am very fond of biology and have taken the initiative to participate in the Canadian Biology Olympiad, eventually qualifying 
      as one of four students to represent Team Canada at the International Biology Olympiad. 
      Driven by my dual passion, I strive to improve healthcare through computer science, mathematics, and engineering.  <br></br> <br></br>
      From self-learning through online resources to creating projects of my own, I am always trying to learn about the newest technologies and acquiring new skills. <br></br> 
      Some of the technologies that I am familiar with include: <br></br></p>
      <div className="row">
      <div className="col-sm">
          <ul>
            <li >C/C++</li>
            <li >JavaScript</li>
            <li >React</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="col-sm">
          <ul>
            <li >Java</li>
            <li >HTML/CSS</li>
            <li >Bootstrap</li>
            <li >Geneious</li>
          </ul>
        </div>
        </div>
        </div>
    </div>
    </Styles>
)
