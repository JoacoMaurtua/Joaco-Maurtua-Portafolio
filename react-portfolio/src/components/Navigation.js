import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import JMD from '../images/JMD.png';
import { GiFalconMoon } from "react-icons/gi";

const NavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 3px solid var(--borderColor);

  .avatar{
    width: 85%;
    border-bottom: 1px solid var(--borderColor);
    text-align: center;
    padding: 2rem 0;
    img{
      width: 90%;
      border-radius: 50%;
      border: 5px solid var(--borderColor);
      &:hover{
        transform: translateY(-5px);
        cursor: pointer;
        
    }
     
    }
  }

  .nav-items{
    width: 100%;
    text-align:center;
    font-size: 1.5rem !important;
    /* .active-class{
      background-color: var(--borderColor);
    } */
    li{
      display: block;
      &:hover{
        background-color: var(--navHover);
      }
      a{
        color: white;
        display: block;
        padding: .45rem 0;
        position: relative;
        z-index: 4;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        font-weight: 600;
        &:hover{
          cursor: pointer;
          color: var(--hoverFont);
        }
        &:before{
          content:"";
          position: absolute;
          bottom:0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primaryColor);
          transition: all 0.6s cubic-bezier(1,-0.2,.25,.95);
          z-index: -1;
          opacity: 0.20;
          transform-origin: right;
        }
      }

      a:hover::before{
        width: 100%;
        height: 100%;

      }
    }

  }

  footer{
    border-top: 1px solid var(--borderColor);
    width: 100%;
    p{
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
      color: white;
    }
  }
  
`;

export default function Navigation() {

  const year = new Date();
  return (
    <NavigationStyled>
      <div className="avatar">
       <img src={JMD} alt=""/>
      </div>
      <ul className="nav-items">
          <li className="nav-item">
              <NavLink to ="/" activeClassName="active-class">Inicio</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/about" activeClassName="active-class">Sobre M??</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/resume" activeClassName="active-class">Habilidades</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/portfolios" activeClassName="active-class">Proyectos</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to ="/contact" activeClassName="active-class">Contacto</NavLink>
          </li>
      </ul>
      <footer>
        <p>
          <span role="img" aria-label="copy-right"> 
            JoacoMa??rtua<GiFalconMoon style={{margin: "0rem 0.2rem"}}/>??{year.getFullYear()} 
          </span>
        </p>
      </footer>
      
    </NavigationStyled>
  )
}
