import React from "react";

export default function datamember(props) {
  return (
    <div className="datt">
    <img className="name" src={props.star} alt='star'/>
        <div className='memtex'>{}props.description</div>
       <div className='facejon'>
        <img className="name" src={props.face} alt='face'/>
        <div className='face2'>
        <p className='jon'>{props.man} </p>
        <p className='work'>{props.work}</p>
        </div>
        </div>
        </div>
  );
}