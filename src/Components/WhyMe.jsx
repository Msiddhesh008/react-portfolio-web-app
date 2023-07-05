import React, { Component } from 'react'
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
        h2="PROFRESSIONAL AND DEDICATED"
        p="Building architectures with modern technology.Building architectures"
        iClass="bi bi-award"
        delay="100"
        />
        
        <Card
        h2="CREATIVE DESIGNING"
        p="Creative designing is the art of blending imagination, aesthetics, and functionality to craft visually captivating and purposeful creations."
        iClass="bi bi-buildings"
        delay="200"
        />
        
        <Card
        h2="ARTISTIC MIND"
        p="An artistic mind is a vivid kaleidoscope of creativity, weaving together unique perspectives to create captivating works of beauty."
        iClass="bi bi-brush"
        delay="300"
        />
        
        <Card
        h2="PASSIONATE CODER"
        p="A passionate coder is a relentless architect of digital worlds, transforming intricate lines of code into functional and impactful creations."
        iClass="bi bi-code-square"
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
            <ProgressBar percent="90" title="CSS" />
            <ProgressBar percent="80" title="Javascript" />
            <ProgressBar percent="80" title="React Js" />
            <ProgressBar percent="60" title="React Native" />
            <ProgressBar percent="80" title="My Sql" />
            <ProgressBar percent="95" title="Bootstrap5" />
            <ProgressBar percent="60" title="Node Js" />

          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default WhyMe
