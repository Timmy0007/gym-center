import React from "react";
import { useState } from "react";

export default function Packdata(props) {

    const [backgroundColor, setbackgroundColor] = useState("");
  
    const styles = {
      backgroundColor: backgroundColor,
    };

    function hoverEffect(){
        setbackgroundColor('black');
      }
    
      function hoverOut(){
        setbackgroundColor("");
      }
  return (
    <div className="package-card"
        onMouseEnter={hoverEffect}
        onMouseLeave={hoverOut}
    >
      
     <div id="nameee"> <h2 className="productname">{props.name}</h2></div>
      <p className="price">{props.price}</p>
      <p className="per">{props.per}</p>
      <div className="desc">
      <img className="mark" src={props.url} alt="checklist" />
      <p className="description">{props.description}</p>
      </div>
      <div className="desc">
      <img className="mark" src={props.url} alt="checklist" />
      <p className="description">{props.description2}</p>
      </div>
      <div className="desc">
      <img className="mark" src={props.url} alt="checklist" />
      <p className="description">{props.description3}</p>
      </div>
      <div className="desc">
      <img className="mark" src={props.url} alt="checklist" />
      <p className="description">{props.description4}</p>
      </div>
      <div className="desc">
      <img className="mark" src={props.url} alt="checklist" />
      <p className="description">{props.description5}</p>
      </div>
      <div className="desc">
      <img className="mark" src={props.url} alt="checklist" />
      <p className="description">{props.description6}</p>
      </div>
        <button className="reg-button" style={styles}>Register Now</button>
    </div>
  );
}