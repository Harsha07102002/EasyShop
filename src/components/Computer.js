import React from 'react';
import { computerData } from '../data/ComputerData'
import classes from '../css/Computers.module.css';
import { Link } from 'react-router-dom';

export default function Computer() {
  const computerMinData = computerData.slice(0,6)
  return (
    <>
      <h1 className={classes.h1}>COMPUTERS</h1>
      <div className={classes.block}>
        {computerMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/computers/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.company},{item.model}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
