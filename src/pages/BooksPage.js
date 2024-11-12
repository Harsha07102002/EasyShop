import React, { useState } from 'react';
import { booksData } from '../data/BooksData';
import classes from '../css/Books.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from './LandingPage';

export default function Books() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const uniqueTitles = [...new Set(booksData.map(item => item.title))];
  const titleHandler = (title) => {
    if (selectedProduct.includes(title)) {
      setSelectedProduct(selectedProduct.filter(item => item !== title));
    } else {
      setSelectedProduct([title]); 
    }
  };

  const filteredData = selectedProduct.length > 0
    ? booksData.filter(item => selectedProduct.includes(item.title))
    : booksData;

  return (
    <>
      <Navbar title="EasyShop" />
      <div className={classes.fullpage}>
        <div className={classes.proSelected}>
          {uniqueTitles.map((title) => (
            <label key={title} className={classes.checkboxLabel}>
              <input
                type="checkbox"
                checked={selectedProduct.includes(title)}
                onChange={() => titleHandler(title)}
              />
              {title}
            </label>
          ))}
        </div>
        <div>
          <h1 className={classes.h1}>BOOKS</h1>
          <div className={classes.block}>
            {filteredData.map((item) => (
              <div key={item.id}>
                <Link style={{textDecoration:'none',color:'black'}} to={`/books/${item.id}`}>
                  <img src={item.image} alt={item.id} />
                  <h6><center>{item.title}, {item.author}</center></h6>
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
