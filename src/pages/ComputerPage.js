import React, { useState } from 'react';
import { computerData } from '../data/ComputerData';
import classes from '../css/Computers.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from './LandingPage';

export default function Computer() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const uniqueCompanys = [...new Set(computerData.map(item => item.company))];
  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter(item => item !== company));
    } else {
      setSelectedProduct([company]); 
    }
  };

  const filteredData = selectedProduct.length > 0
    ? computerData.filter(item => selectedProduct.includes(item.company))
    : computerData;

  return (
    <>
      <Navbar title="EasyShop" />
      <div className={classes.fullpage}>
        <div className={classes.proSelected}>
          {uniqueCompanys.map((company) => (
            <label key={company} className={classes.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedProduct.includes(company)}
                onChange={() => companyHandler(company)}
              />
              {company}
            </label>
          ))}
        </div>
        <div>
          <h1 className={classes.h1}>COMPUTERS</h1>
          <div className={classes.block}>
            {filteredData.map((item) => (
              <div key={item.id}>
                <Link style={{textDecoration:'none',color:'black'}} to={`/computers/${item.id}`}>
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
