import React, { useState } from 'react';
import { watchData } from '../data/WatchData';
import classes from '../css/Watches.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from './LandingPage';

export default function Watch() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const uniqueBrands = [...new Set(watchData.map(item => item.brand))];
  const brandHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand));
    } else {
      setSelectedProduct([brand]); 
    }
  };

  const filteredData = selectedProduct.length > 0
    ? watchData.filter(item => selectedProduct.includes(item.brand))
    : watchData;

  return (
    <>
      <Navbar title="EasyShop" />
      <div className={classes.fullpage}>
        <div className={classes.proSelected}>
          {uniqueBrands.map((brand) => (
            <label key={brand} className={classes.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedProduct.includes(brand)}
                onChange={() => brandHandler(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
        <div>
          <h1 className={classes.h1}>WATCHES</h1>
          <div className={classes.block}>
            {filteredData.map((item) => (
              <div key={item.id}>
                <Link style={{textDecoration:'none',color:'black'}} to={`/watches/${item.id}`}>
                  <img src={item.image} alt={item.id} />
                  <h6><center>{item.brand}, {item.model}</center></h6>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <center><Link style={{ textDecoration: 'none' }} to='/' path={<LandingPage />}><button className={classes.homeBtn}>Go to Home</button></Link></center>
    </>
  );
}
