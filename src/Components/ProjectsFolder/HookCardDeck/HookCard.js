import React from 'react'
import "./HookCard.css";

const HookCard = ({ deg, src, alt }) => {

    const cardStyle = {
        transform : `rotate(${deg}deg)`
    }

  return (
    <img 
    width={180}
    height={280}
    className='card'
    style={cardStyle}
    src={src} 
    alt={alt}
    />
  )
}
export default HookCard


