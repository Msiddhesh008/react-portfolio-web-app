import React from 'react'

import DotLoader from "react-spinners/DotLoader";


const Loader = () => {
  return (
    <div id="loader" className="container-fluid">
      <DotLoader
        color={"#89715b"}
        loading="loading"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h2>Loading</h2>
    </div>
  )
}

export default Loader