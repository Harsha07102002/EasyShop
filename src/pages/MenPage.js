import React, { useState } from 'react';
import { menData } from '../data/MenData';
import classes from '../css/Men.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from './LandingPage';

export default function Men() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const uniqueBrands = [...new Set(menData.map(item => item.brand))];
  const brandHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand));
    } else {
      setSelectedProduct([brand]); 
    }
  };

  const filteredData = selectedProduct.length > 0
    ? menData.filter(item => selectedProduct.includes(item.brand))
    : menData;

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
          <h1 className={classes.h1}>MEN's WEAR</h1>
          <div className={classes.block}>
            {filteredData.map((item) => (
              <div key={item.id}>
                <Link style={{textDecoration:'none',color:'black'}} to={`/men/${item.id}`}>
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
