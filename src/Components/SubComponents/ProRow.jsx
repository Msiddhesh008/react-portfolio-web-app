import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProRow extends Component {
  render() {
    const { title, imgLink, p1, p2, pc, p1Color, p2Color, p3Color, h3One, h3Two, route } = this.props


    return (

        <div className="row mt-5">
        <div className="col-12 col-lg-6 mt-5 ">
          <p>{title}</p><br/>
          <img src={ imgLink } className='proImg img-fluid' alt="" />

        </div>
        <div className="col-12 col-lg-6 mt-5 ps-5">
          <div className="proDisc mt-5">
            
          <>
          <p style={{color:`${p1Color}`}}>{p1}</p>
          <div className='d-flex gap-4'>
          <h3>{h3One}</h3>
          </div>
          </>
            
            <>
            <p style={{color:`${p2Color}`}}>{p2}</p>
            <div className='d-flex gap-4'>
            <h3>{h3Two}</h3>
            </div>
            </>

            <p style={{color:`${p3Color}`}}>Concepts</p>
            <p>{pc}</p>

            <Link to={`${route}`}>
            <p style={{ cursor:"pointer"}}>Live Demo</p>
            </Link>

          </div>
        </div>
        </div>
    )
  }
}

export default ProRow
