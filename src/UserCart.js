import React from 'react'
import { useCart } from './context/CartContext'
import classes from './css/Cart.module.css'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const UserCart = () => {
  const { cartItems } = useCart();  
  return (
    <div>
      <Navbar title="EasyShop"/>
      <center><h1>Cart Items</h1></center>
      {cartItems.map((item) => (
        <div className={classes.cartSection} key={item.id}> {/* Added key prop for list items */}
          <div className={classes.cartImg}>
            <img src={item.image} alt={item.product} /> {/* Alt text for accessibility */}
          </div>
          <div className="cartDetails">
            <h2>{item.product}</h2>
            <h5>{item.model}</h5>
            <h5>{item.price}</h5>
          </div>
        </div>
      ))}
      <center><Link style={{ textDecoration: 'none' }} to='/' path={<Navbar />}><button className={classes.chBtn}>Go to Home</button></Link></center>
    </div>
  );
};

export default UserCart;
