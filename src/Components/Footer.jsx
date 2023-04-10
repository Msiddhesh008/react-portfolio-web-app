import React, { Component } from 'react'
import "./Footer.css"

class Footer extends Component {
  render() {
    return (
      <div className='Footer container-fluid' id='Footer'>
        <div className="container">

          <div className="col-12 contact">
          <p>Lets Talk</p>
          <h1>msiddhesh008@gmail.com</h1>
          </div>

          <div className="row footerBottom">
            <div className="col-12 col-lg-8 copyright">
            <p>© 2025 Andle Made with❤️by Siddhesh</p>
            </div>
            <div className="col-12  col-lg-4 social">
              <p style={{color:"#55acee"}}>Twitter</p>
              <p style={{color:"#ffffff"}}>Github</p>
              <p style={{color:"#cd201f"}}>Instagram</p>
              <p style={{color:"#3b5998"}}>Facebook</p>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}

export default Footer
