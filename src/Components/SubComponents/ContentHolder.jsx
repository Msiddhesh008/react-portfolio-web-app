import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class ContentHolder extends Component {
  componentDidMount() {
      AOS.init();
  }


  render() {

    const{ title, h5, p1, p2, sign, signTitle, animation } =this.props

    const aboutInfoStyle = {
        lineHeight:"1.8rem",
        fontSize:"large",
        color:"white"
    }
    return (
        <div 
        className="col-12 col-lg-6 pt-5 " 
        style={aboutInfoStyle}
        data-aos={`${animation}`} 
        data-aos-easing="ease-in-sine"
        >
          <h1 style={{color:"#89715b", fontSize:"3.5rem"}}>{title}</h1><br />
          <h5 style={{lineHeight:"1.8rem"}}>{h5}</h5><br />
            <p>{p1}</p>
            <p>{p2}</p>
                <img src={sign} alt="" style={{filter:"revert"}} width={150}/>
                <h6 className='mt-2'>{signTitle}</h6>
        </div>
    )
  }
}
