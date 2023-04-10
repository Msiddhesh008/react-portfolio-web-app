import React, { useEffect, useRef } from "react";
import "./Card.css";

import VanillaTilt from "vanilla-tilt";

const Tilt = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
};

const Card = (props) => {

  const options = {
    scale: 1,
    "max-glare":       1,    
    max:               5,    
    reverse:           true, 
    transition:        true,
    glare:             true, 
    easing:            "cubic-bezier(.03,.98,.52,.99)", 
  };

  return (
    <Tilt id="card" options={options}>
      <h2>{props.pokeName}</h2>
      <div className="top-cnt">
      <img src={props.link} alt="card" width={220} />
      </div>
      <div className="bottom-cnt">
        <p>Type : {props.type}</p>
        <p>EXP: {props.exp}</p>
      </div>
    </Tilt>
  );
};

export default Card;

// https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg

// https://assets.codepen.io/13471/charizard-gx.webp
