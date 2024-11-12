import React, { useState } from 'react';
import { acData } from '../data/AcData';
import classes from '../css/Ac.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from './LandingPage';

export default function Ac() {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter(item => item !== company));
    } else {
      setSelectedProduct([company]); 
    }
  };

  const filteredData = selectedProduct.length > 0
    ? acData.filter(item => selectedProduct.includes(item.company))
    : acData;

  return (
    <>
      <Navbar title="EasyShop" />
      <div className={classes.fullpage}>
        <div className={classes.proSelected}>
          {acData.map((phone) => (
            <label key={phone.company} className={classes.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedProduct.includes(phone.company)}
                onChange={() => companyHandler(phone.company)}
              />
              {phone.company}
            </label>
          ))}
        </div>
        <div>
          <h1 className={classes.h1}>AC's</h1>
          <div className={classes.block}>
            {filteredData.map((item) => (
              <div key={item.id}>
                <Link style={{textDecoration:'none',color:'black'}} to={`/ac/${item.id}`}>
                  <img src={item.image} alt={item.id} />
                  <h6><center>{item.company}, {item.model}</center></h6>
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
