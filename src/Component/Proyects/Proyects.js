import React, { Component } from 'react';
import './Proyects.css';




class Proyects extends Component {

    render () {

        return (
            <div id="proyects" className="proyect">

              <div class="flip-card">

               <div class="flip-card-inner">

               <div class="flip-card-front">
               <img src="https://github.com/Msaezcardenas/Portafolio-/blob/master/src/Imagenes/moodvie.png?raw=true" />
               </div>

               <div class="flip-card-back">
               <h1>Moodvie</h1> 
               <p> Aplicación que entrega recomendaciones de películas acorde a tu estado de animo y el tiempo que dispongas</p> 

               <button ><a target="_blank" href="https://msaezcardenas.github.io/Hack-pelicula/" > Demo </a> </button>
               <button > <a  target="_blank" href="https://github.com/Msaezcardenas/Hack-pelicula" > Repositorio </a> </button>

                </div>

              </div>

             </div>
             <div class="flip-card">

                <div class="flip-card-inner">

                <div class="flip-card-front">
                <img src="https://github.com/Msaezcardenas/Portafolio-/blob/master/src/Imagenes/pinterest.png?raw=true" />
                </div>

                <div class="flip-card-back">
                <h1>Replica Pinterest</h1> 
                <p> Replica del diseño de la página Pinterest en versión desktop</p> 

                <button ><a  target="_blank" href="https://msaezcardenas.github.io/Replica-Pinterest/" > Demo </a> </button>
               <button > <a  target="_blank" href="https://github.com/Msaezcardenas/Replica-Pinterest" > Repositorio </a> </button>

                </div>

                </div>

                </div>

                 <div class="flip-card">

                    <div class="flip-card-inner">

                    <div class="flip-card-front">
                    <img src=  "https://github.com/Msaezcardenas/Portafolio-/blob/master/src/Imagenes/socialveg.png?raw=true" />
                    </div>

                    <div class="flip-card-back">
                    <h1> SocialVeg</h1> 
                    <p> Aplicación que entrega recomendaciones de películas acorde a tu estado de animo y el tiempo que dispongas</p> 
                    <button  ><a target="_blank" href="https://msaezcardenas.github.io/SCL007-Social-Network/" > Demo </a> </button>
                    <button  > <a  target="_blank" href="https://github.com/Msaezcardenas/SCL007-Social-Network" > Repositorio </a> </button>

                    </div>

                    </div>

                    </div>
                                
             </div>
      )
    }
}

export default Proyects; 