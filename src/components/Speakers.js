import React from 'react'
import { speakerData } from '../data/SpeakersData'
import classes from '../css/Speakers.module.css'
import { Link } from 'react-router-dom';


export default function Speakers() {
  const speakerMinData = speakerData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>SPEAKERS</h1>
      <div className={classes.block}>
        {speakerMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/speakers/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
