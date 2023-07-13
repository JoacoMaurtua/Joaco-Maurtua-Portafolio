import React from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative; 
    
    .p-particles-js-main{
      position: absolute;
      top: 0;
      left:0;
    }

    .typography{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 70%;
      h1, p{
        color: var(--colorWhite);
      }
    }

    .icons{
      display: flex;
      justify-content: center;
      margin-top: 1rem;
        .icon{
          border: 2px solid var(--borderColor);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all .4s ease-in-out;
          cursor: pointer;
          color: var(--colorWhite);
          &:not(:last-child){
            margin-right: 1rem;
          }
          &:hover{
            background-color: var(--primaryColor);
            color: white;
          }
          svg{
            margin: .5rem;
          }
        }
    }

`;

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js-main">
        <Particle />
      </div>
      <div className="typography">
          <h1 >¡Hola Mundo!<span style={{color:"var(--primaryColor)"}}> Soy Joaquín</span></h1>
          <p>
          Un sujeto extrovertido, con muchas ganas de innovar y seguir aprendiendo cada día,
          me apasiona la tecnología y como usarla para crear valor en la sociedad, me gusta
          mucho trabajar en equipo y llevar al código ideas loquísimas.
          ¡Desarrollador fullstack MERN y MEVN disponible para trabajar remotamente!
            
          </p>
          <div className="icons">
              <a href="https://www.linkedin.com/in/joaqu%C3%ADn-ma%C3%BArtua-a4403a209/" className="icon i-linkdin">
                <LinkedInIcon />
              </a>
              <a href="https://github.com/JoacoMaurtua" className="icon i-github">
                <GithubIcon />
              </a>
              <a href="https://www.instagram.com/maurtuadiban/" className="icon i-instagram">
                <InstagramIcon />
              </a>
              
          </div>
      </div>
      
    </HomePageStyled>
  )
}
