import React, { Component } from 'react'
import "./TechstackAndAbout.css"
import photo from "../images/photo.jpg"
import sign from "../images/sign1.png"
import ContentHolder from './SubComponents/ContentHolder'
import TechTag from './SubComponents/TechTag'
import AOS from 'aos';
import 'aos/dist/aos.css';

class TechstackAndAbout extends Component {
  componentDidMount() {
      AOS.init();
  }

  render() {
    return (
      <div className='TechStack pt-5'>
        <div className="container-fluid ">
          <div className="container">
            {/* <h1 style={{color:"#89715b", float:"Left"}}>Tech Stack</h1> */}
            <div className="row techTags">
              <TechTag title="Html" />
              <TechTag title="CSS" />
              <TechTag title="Javascript" />
              <TechTag title="JQuery" />
              <TechTag title="Bootstrap" />
              <TechTag title="React Js" />
              <TechTag title="React Native" />
              <TechTag title="Node Js" />
              <TechTag title="MySQL" />
              <TechTag title="Java" />
              <TechTag title="Hibernate" />
            </div>
          </div>
          <div className="container about ">
            <div className="row aboutrow">
              <div className="col-12 col-lg-6 pt-5">

              <img 
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="250"
              src={photo} alt="" className='photo img-fluid'/>
              </div>

              <ContentHolder 
              title="SIDDHESH MORE" 
              h5="My passion for technology is matched 
              only by my love for the arts, and I believe that this combination allows me to approach 
              problem-solving in a truly creative and innovative way."
              p1="Whether I'm designing a website, coding an application, or creating a piece of art, 
              I always strive to deliver the highest quality work possible"
              p2="With a focus on user experience and aesthetics, And when I'm not working on a project, you can 
              often find me expressing my creativity through music or painting, constantly 
              exploring new ways to express myself through art."
              sign={sign}
              signTitle="Siddhesh More"
              animation="fade-up"
              />
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default TechstackAndAbout
