import React from 'react'
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faLinkedin, faGithubSquare, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faContactCard,
  faEnvelope,
  faHome,
  faUser,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import Loader from 'react-loaders'

export default function About() {
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>ABOUT</h1>
        <p><b>Hello and Welcome!</b></p>
        <p>
          My name is Salma Ibrahim and I am a Full Stack Web Developer. I have my BA in Sociolgy from the University of Alberta, but I got started with my coding journey at Lighthouse Labs in the Full-Stack Web Development Bootcamp.
        </p>
        <p>
          I am passionate about building beautiful and accessible web aplications for people, as well as developing new skills.
        </p>
        <p>
          Along with coding I love to read, bake, and connect with others! You can find me with the following links:
        </p>


        <div className='links'>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/salma-ibrahim-a1275817a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d43" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/salmy101"
          >
            <FontAwesomeIcon icon={faGithubSquare} color="#4d4d43" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/document/d/1iSdhLUPh5jDhALn9Vphg2DSAJgYgkbMw/edit?usp=sharing&ouid=108378852677372517097&rtpof=true&sd=true"
          >
            <FontAwesomeIcon icon={faContactCard} color="#4d4d43" />
          </a>
        </div>
        
        
      </div>
    </div>
    <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    
    <Loader type="ball-scale-ripple-multiple"/>

    </>
  )
}
