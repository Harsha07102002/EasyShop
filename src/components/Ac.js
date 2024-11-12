import React from 'react'
import { acData } from '../data/AcData'
import classes from '../css/Ac.module.css'
import { Link } from 'react-router-dom';


export default function Ac() {
  const acMinData = acData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>AC's</h1>
      <div className={classes.block}>
        {acMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/ac/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.company},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
