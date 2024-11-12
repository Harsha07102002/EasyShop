import React from 'react'
import { fridgeData } from '../data/FridgeData'
import classes from '../css/Fridge.module.css'
import { Link } from 'react-router-dom';


export default function Fridge() {
  const fridgeMinData = fridgeData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>FRIDGE</h1>
      <div className={classes.block}>
        {fridgeMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/fridge/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
