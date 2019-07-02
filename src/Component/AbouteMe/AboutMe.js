import React, { Component } from 'react';

import './AboutMe.css'



class About extends Component {

    render () {

        return (
          <div className="about" id="aboutMe" >

          <div className="aboutItems">

              <div className="aboutImg">
              <img src="https://raw.githubusercontent.com/Msaezcardenas/Portafolio-/master/src/imagenes/monica.png"  className="moluFoto"></img>
              </div>

              <div className="aboutText">
              <h1> Hola ! </h1>
              <p>  Soy una persona en extremo curiosa, me encanta mantenerme en constante aprendizaje y CREAR cosas !</p>
              <p> Estoy enamorada de la programación porque no hay limites, siempre hay algo nuevo que aprender y nuevos desafios que afrontar. </p>
              </div>

          </div>
          
          </div>
      )
    }
}

export default About; 