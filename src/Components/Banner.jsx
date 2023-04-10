import React, { Component } from 'react'
import "./Banner.css"
import { Fragment } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const OverLay = () =>(
  <div className='overLay container row w-100'>
    <div className="col-3 d-none d-lg-block line"></div>
    <div className="col-3 d-none d-lg-block line"></div>
    <div className="col-3 d-none d-lg-block line"></div>
    <div className="col-3 d-none d-lg-block line d-md-none"></div>
  </div>
)



class Banner extends Component {
  componentDidMount() {
      AOS.init();
  }
  
  render() {
    return (
      <Fragment>
      <div className='container-fluid Banner'>
        <div className="container text-light banner-cnt">
      <div className="row ">
      <div className="col-12 col-lg-9 col-md-12 ">
      <h3 className="heroTitle" 
          data-aos="fade-up" 
          data-aos-delay="100"
          data-aos-easing="ease-in-sine" 
          data-aos-duration="600"
          >Siddhesh.</h3>
      <h1 className='heroTitle2'
          data-aos="fade-up" 
          data-aos-delay="300"
          data-aos-easing="ease-in-sine" 
          data-aos-duration="600"
          >Fullstack Developer</h1>
      <p
          data-aos="fade-up" 
          data-aos-delay="600"
          data-aos-easing="ease-in-sine" 
          data-aos-duration="600"
          >My mission as a fullstack developer is to develop web applications that solve complex problems while providing seamless user experiences.</p>
      </div>
      </div>
      </div>
      <div className="iconCnt">
      <i class="bi bi-twitter"></i>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-linkedin"></i>
      </div>
      </div>
      <OverLay/>
      
      </Fragment>
    )
  }
}

export default Banner
