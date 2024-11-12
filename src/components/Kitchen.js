import React from 'react'
import { kitchenData } from '../data/KitchenData'
import classes from '../css/Kitchen.module.css'
import { Link } from 'react-router-dom';


export default function Kitchen() {
  const kitchenMinData = kitchenData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>KITCHEN</h1>
      <div className={classes.block}>
        {kitchenMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/kitchen/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
