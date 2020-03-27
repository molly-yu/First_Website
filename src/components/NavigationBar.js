import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: #74535D;
        position: fixed;
        top: 0;
        width: 100%;
        z-index:10;
    }
    .navbar-brand, .navbar-nav, .nav-link {
        color: #CCB6BC;
        font-size: 20 px;

        &:hover{
            color: #f2f2f2;
        }
    }

    .navbar a {
        float: left;
        display: block;
        color: #CCB6BC;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        border-bottom: 3px solid transparent;

        &:hover {
            border-bottom: 3px;
            color: #f2f2f2;
          }
          
          &.active {
            border-bottom: 3px;
            color: #f2f2f2;
          }
      }   
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Molly Yu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#connect">Connect</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)