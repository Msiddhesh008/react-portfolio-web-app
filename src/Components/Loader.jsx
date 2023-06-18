import React from 'react'

// import DotLoader from "react-spinners/DotLoader";
import sm from "../images/sm.svg"


const Loader = () => {
  return (
    <div style={{
      height:"100vh"
    }}>
    <div id="loader" className="container-fluid">
      {/* <DotLoader
        color={"#89715b"}
        loading="loading"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      <img src={sm} alt="" width={80} className='splash'/>
      
    </div>
      <p className="splash-name">Siddhesh More</p>
    </div>
  )
}

export default Loader