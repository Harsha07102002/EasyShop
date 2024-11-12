import React from 'react'
import { womanData } from '../data/WomanData'
import classes from '../css/Woman.module.css'
import { Link } from 'react-router-dom';


export default function Woman() {
  const womanMinData = womanData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>WOMEN'S WEAR</h1>
      <div className={classes.block}>
        {womanMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/woman/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
