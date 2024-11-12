import React from 'react'
import { tvData } from '../data/TvData'
import classes from '../css/Tv.module.css'
import { Link } from 'react-router-dom';


export default function Tv() {
  const tvMinData = tvData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>TV's</h1>
      <div className={classes.block}>
        {tvMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/tv/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
