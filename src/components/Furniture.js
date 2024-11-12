import React from 'react'
import { furnitureData } from '../data/FurnitureData'
import classes from '../css/Furniture.module.css'
import { Link } from 'react-router-dom';


export default function Furniture() {
  const furnitureMinData = furnitureData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>FURNITURE</h1>
      <div className={classes.block}>
        {furnitureMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/furniture/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
