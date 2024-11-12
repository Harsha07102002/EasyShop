import React from 'react';
import { mobileData } from '../data/MobileData'
import classes from '../css/Mobiles.module.css';
import { Link } from 'react-router-dom';

export default function Mobile() {
  const mobileMinData = mobileData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>MOBILES</h1>
      <div className={classes.block}>
        {mobileMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/mobiles/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.company},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
