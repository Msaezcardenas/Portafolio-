import React, { Component } from 'react';
import  './Navigation.css';




class Navigation extends Component {
  
    render () {

        return (
          <div className="navbarStyle">

            <ul className="nav">

              <li className="nav-item">
                <a className="nav-link active text-white" href="#home" > Inicio </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#aboutMe" > Acerca de mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#proyects"> Mis Proyectos </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#skills"> Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contacto</a>
              </li>
              
            </ul>

          </div>
        )
    }
}

export default Navigation;