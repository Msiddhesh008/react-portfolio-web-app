import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Footer extends Component {
  componentDidMount() {
      AOS.init();
  }

  render() {
    return (
      <div className='Footer container-fluid' id='Footer'>
        <div className="container">

          <div className="col-12 contact">
          <p>Lets Talk</p>
          <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          >msiddhesh008@gmail.com</h1>
          </div>

          <div className="row footerBottom">
            <div className="col-12 col-lg-8 copyright">
            <p>© 2023 Made with❤️by Siddhesh</p>
            </div>
            <div className="col-12  col-lg-4 social">
              <a href="#" target='_blank' style={{color:"#55acee", textDecoration: "none"}}>Twitter</a>
              <a href="#" target='_blank' style={{color:"#ffffff", textDecoration: "none"}}>Github</a>
              <a href="https://www.instagram.com/msiddhesh007/" target='_blank' style={{color:"#cd201f", textDecoration: "none"}}>Instagram</a>
              <a href="#" target='_blank' style={{color:"#3b5998", textDecoration: "none"}}>Facebook</a>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}

export default Footer
