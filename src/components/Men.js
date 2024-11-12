import React from 'react'
import { menData } from '../data/MenData'
import classes from '../css/Men.module.css'
import { Link } from 'react-router-dom';


export default function Men() {
  const menMinData = menData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>MEN'S WEAR</h1>
      <div className={classes.block}>
        {menMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/men/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
