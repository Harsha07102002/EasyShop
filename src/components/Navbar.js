import React from 'react';
import classes from '../css/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar(props) {
  const {cartItems} = useCart()
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg bg-light`} id={classes.nav}>
        <div className="container-fluid">
          <Link className={`navbar-brand`} id={classes.navBrand} to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{
                color: "rgb(238, 205, 18)",
                backgroundColor: "rgb(238, 205, 18)",
                borderRadius: "5px",
                width: "24px",
                height: "24px",
              }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link id={classes.navLink} className="d-flex ms-auto justify-content-end" to='/cart' style={{textDecoration:'none',alignItems: 'flex-end'}}>
              <h5 className={classes.navItem}>Cart [<span>
                {cartItems.length }]</span></h5>
            </Link>
         </div>
        </div>
      </nav>
      <ul className={classes.check}>
        <Link to='/mobiles'>
          <li>Mobiles</li>
        </Link>
        <Link to='/computers'>
          <li>Computers</li>
        </Link>
        <Link to='/watches'>
          <li>Watches</li>
        </Link>
        <Link to='/men'>
          <li>Men's Wear</li>
        </Link>
        <Link to='/woman'>
          <li>Women's Wear</li>
        </Link>
        <Link to='/books'>
          <li>Books</li>
        </Link>
        <Link to='/furniture'>
          <li>Furniture</li>
        </Link>
        <Link to='/kitchen'>
          <li>Kitchen</li>
        </Link>
        <Link to='/fridge'>
          <li>Fridge</li>
        </Link>
        <Link to='/speakers'>
          <li>Speakers</li>
        </Link>
        <Link to='/ac'>
          <li>AC's</li>
        </Link>
        <Link to='/tv'>
          <li>TV's</li>
        </Link>
      </ul>
    </>
  );
}