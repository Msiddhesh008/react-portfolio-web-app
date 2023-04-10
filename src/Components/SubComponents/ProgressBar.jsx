import React, { Component } from 'react'
import 'aos/dist/aos.css';

 class ProgressBar extends Component {

  render() {
    const { percent, title, delay } = this.props
    
    return (
      
      <div className=''
      data-aos-delay={`${delay}`}
      data-aos="fade-up" 
      >
      <h5>{title}</h5>
        <div 
        className="progress" 
        role="progressbar" 
        aria-label="Animated striped example" 
        aria-valuenow={percent} aria-valuemin="0" 
        aria-valuemax="100" 
        style={{backgroundColor:"black"}}

        >
        <div className="progress-bar fw-bold " style={{width:`${percent}%`, backgroundColor:"#89715b"}}>{`${percent} %`}</div>
        {/* <div class="progress-bar" style={{width:"25%"}}>25%</div> */}
        </div>
        </div>
    )
  }
}

export default ProgressBar;
