import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import SmallTitle from './SmallTitle';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

const ResumeStyled = styled.section`
    color: var(--colorWhite);
    .small-title{
      padding-bottom: 2rem;
    }

    .resume-container{
      border-left: 1px solid var(--borderColor);
      width: 80%;
    }

    .education-container{
      
    }

`;

export default function Resume() {
  const codeIcon = <CodeIcon/>
  const education = <SchoolIcon/>

  return (
    <ResumeStyled>
      <Title title={'Resumen'} span={'Resumen'}/>
      <InnerLayout>
          <div className="small-title">
              <SmallTitle icon={codeIcon} title={'Otras Tecnologías'} />
          </div>
          <div className="resume-container">
              <ResumeItem 
                title={'Front-end'}
                text={'JQuery, LESS, SASS, BackBone.js, Bootstrap, Reactstrap, Material UI, RESTful API, React Motion, Three.js, React Three Fiber 3D, WebGL, GSAP.'}
              />
              <ResumeItem 
                title={'Back-end'}
                text={'MVC, Firebase, JWT, Cookie Parser, Socket.io, AWS-EC2, Integración-Checkout PayPal y Mercado Pago, Postman.'}
              />
              <ResumeItem 
                title={'Otras Herramientas'}
                text={'Bash, Git, GitHub, Trello, Jira, Figma, SCRUM'}
              />
          </div>

          <div className="small-title">
              <SmallTitle icon={education} title={'Educación'} />
          </div>
          <div className="resume-container education-container">
              <ResumeItem 
                year = {'2021'}
                title={'Coding Dojo Bootcamp'}
                text={'Certificado como cinturón negro (rango más alto) en el desarrollo de fullstack MERN.'}
              />
              <ResumeItem 
                year = {'2020'}
                title={'Computer Science BA'}
                text={'Universidad Católica San Pablo, Arequipa(Perú)'}
              />
          </div>
      </InnerLayout>
    </ResumeStyled> 
  )
}


