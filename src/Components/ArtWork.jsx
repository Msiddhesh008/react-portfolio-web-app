import React, { Component } from 'react'
import art1 from "../images/art1.jpg"
import art2 from "../images/art2.jpg"
import art3 from "../images/art3.jpg"
import art4 from "../images/art5.jpg"

export default class ArtWork extends Component {
  render() {
    return (
        <div className="Artwork container-fluid">
            <div className="container pt-4">
        <h1 style={{color:"#89715b"}}>Artworks</h1>
        <div class="containerImg">
        <div class="box">
            <img src={art1} alt="art1"/>
            <span>✏️</span>
        </div>
        <div class="box">
            <img src={art2} alt="art2"/>
            <span>🖌️</span>
        </div>
        <div class="box">
            <img src={art3} alt="art3"/>
            <span>🎨</span>
        </div>
        <div class="box">
            <img src={art4} alt="art4" />
            <span>✒️</span>
        </div>
        </div>
        </div>
        </div>
    )
  }
}
