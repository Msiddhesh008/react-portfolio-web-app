import React, { Component, Fragment } from 'react'
import ArtWork from '../Components/ArtWork';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Projects from '../Components/Projects';
import TechstackAndAbout from '../Components/TechstackAndAbout';
import WhyMe from '../Components/WhyMe';

class Home extends Component {
  render() {
    return (
    <Fragment>
    <Banner/>
    <TechstackAndAbout/>
    <WhyMe/>
    <Projects/>
    <ArtWork/>
    <Footer/>
    </Fragment>
    )
  }
}

export default Home
