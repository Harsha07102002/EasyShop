import React from 'react';
import { watchData } from '../data/WatchData'
import classes from '../css/Watches.module.css';
import { Link } from 'react-router-dom';


export default function Watch() {
  const watchMinData = watchData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>WATCHES</h1>
      <div className={classes.block}>
        {watchMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/watches/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.brand},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
