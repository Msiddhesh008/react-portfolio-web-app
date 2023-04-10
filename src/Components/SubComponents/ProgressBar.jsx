import React, { Component } from 'react'
import 'aos/dist/aos.css';

 class ProgressBar extends Component {

  render() {
    const { percent, title } = this.props
    
    return (
      
      <div className=''
      data-aos="fade-up" 
      data-aos-duration="1500"
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
