import React, { Component } from 'react'
import "./WhyMe.css"
import ProgressBar from '../Components/SubComponents/ProgressBar'
import ContentHolder from './SubComponents/ContentHolder'
import Card from './SubComponents/Card'

class WhyMe extends Component {
  render() {
    return (
      <div className='WhyMe container-fluid'>
        <div className="container pt-5">
        <h1 style={{color:"#89715b", fontSize:"3.5rem"}}>Why Me</h1><br />

        <div className="row pt-4 whymerow">
        
        <Card
        h2="PROFRESSIONAL AND DEDICATE TEAM"
        p="Building architectures with modern technology.Building architectures"
        iClass="bi bi-twitter"
        delay="100"
        />
        
        <Card
        h2="PROFRESSIONAL AND DEDICATE TEAM"
        p="Building architectures with modern technology.Building architectures"
        iClass="bi bi-twitter"
        delay="200"
        />
        
        <Card
        h2="PROFRESSIONAL AND DEDICATE TEAM"
        p="Building architectures with modern technology.Building architectures"
        iClass="bi bi-twitter"
        delay="300"
        />
        
        <Card
        h2="PROFRESSIONAL AND DEDICATE TEAM"
        p="Building architectures with modern technology.Building architectures"
        iClass="bi bi-twitter"
        delay="400"
        />
        
        </div>

        <div className="row pt-4 pb-4">
          
          <ContentHolder
          title="Teck Skills"
          h5="As a developer, my passion for creating innovative and impactful solutions 
          drives my work. I am constantly striving to stay up-to-date with the latest 
          technologies and trends, ensuring that my skills and knowledge are always at 
          the forefront of the industry."
          animation="fade-up"
          />

          <div className="col-lg-6 col-12 progressCnt p-3 pb-4">

            <ProgressBar percent="90" title="HTML" />
            <ProgressBar percent="85" title="CSS" />
            <ProgressBar percent="90" title="Javascript" />
            <ProgressBar percent="80" title="React Js" />
            <ProgressBar percent="90" title="React Native" />

          </div>

          
        </div>

        </div>
      </div>
    )
  }
}

export default WhyMe
