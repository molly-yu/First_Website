import React from 'react'
import styled from 'styled-components';
import bg1 from './assets/bg1.jpg';

const Styles = styled.div`
    .Home{
        background-color: #74535D;
        background-image: url(${bg1});
        background-size: cover;
        background-repeat:no repeat;
        background-position: center center;
        height:100vh;
        width:100%;
        color: #efefef;
        position:relative;
        z-index: -2;
        text-align:center;
    }
    .overlay{
        position: absolute;
        top: 40vh;
        left: 0;
        right: 0;
        bottom: 20vh;
        z-index = -1;
        
        -webkit-box-shadow: inset 0 0 1000px #7B4455;
       -moz-box-shadow: inset 0 0 1000px #7B4455;
        box-shadow: inset 0 0 1000px #7B4455;
        
    }

    .Home h1 {
        padding-top:50vh;
        font-size: 70px;
        font-family: "Candara", sans-serif;
        font-weight:500;
        color:white;
      }
      p {
        font-size: 20px;
        font-family: "Candara", sans-serif;
        font-weight:400;
        font-style:italic;
        color:white;
      }

`;

export const Home = () => (
    <Styles>
    <div className="Home">
        <div className="overlay"></div>
        <h1>Molly Yu</h1>
        <p>Software Developer</p>
    </div>
    </Styles>
)
