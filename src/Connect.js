import React from 'react'
import styled from 'styled-components';

const Styles = styled.div`
  .Connect {
    background-color: #EDD7DE;
    height:100vh;
    width:100%;
    position:relative;
    text-align:center;
    padding-top: 65px;
  }
    h2{
      font-family: "Candara", sans-serif;
      font-weight:500;
      padding:30px;
      text-align:center;
      color:#74535D;
      font-size:25px;
    }

    .social-links{
      display:flex;
      justify-content:space-between;
      width:50%;
      margin:auto;
    }

    .social-links i{
      color:#74535D;
      font-size:5em;
      padding:8px;
    }

    .overlay2{
      position: absolute;
      background-color:#74535D;
      opacity:0.6;
      top: 60px;
      left: 0;
      right: 0;
      height:5px;
      z-index = -1;
    }
`;


export const Connect = () => (
    <Styles>
    <div className="Connect" id="connect">
      <div className="overlay2"></div> 
        <h1>Connect</h1>
        <h2>Feel free to contact me through GitHub, Linkedin, or by email. </h2>
        <div className="social-links">
        <a href="https://github.com/molly-yu" rel="noopener noreferrer" target="_blank" >
            <i className="fa fa-github-square" aria-hidden="true"/>
          </a>
          <a href="https://www.linkedin.com/in/molly-yu-/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square" aria-hidden="true"/>
          </a>
          <a href="mailto:m234yu@edu.uwaterloo.ca" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope-square" aria-hidden="true"/>
          </a>
        </div>
    </div>
    </Styles>
)
