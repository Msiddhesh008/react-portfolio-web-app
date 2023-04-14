import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Card.css"

class Card extends Component {
  componentDidMount() {
      AOS.init();
  }


  render() {
    const { h2, p, iClass } = this.props

    // delay

    return (
        <div 
        className="col-lg-3 col-12 col-md-6 whyMeCnt ps-4 pe-4 pt-4 pb-4 "
        // data-aos-delay={`${delay}`}
        // data-aos="fade-up" 
        // data-aos-easing="ease-in-sine"
        style={{position:"relative"}}
        >
          <h2>{h2}</h2>
          <p>{p}</p>
          <div 
          style={{position:"absolute", bottom:"1rem"}}>
          <i class={iClass}></i>
          </div>
        </div>
    )
  }
}

export default Card 
