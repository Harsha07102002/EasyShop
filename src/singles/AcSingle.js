import React from 'react';
import { acData } from '../data/AcData';
import { Link,useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import classes from '../css/Ac.module.css';
import Ac from '../pages/ACPage';
import { useCart } from '../context/CartContext';
import UserCart from '../UserCart';

export default function AcSingle() {
    const { id } = useParams();
    const {addToCart} = useCart()
    const product = acData.find((item) => item.id === id);
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <>
            <Navbar title="EasyShop" />
            <div className={classes.ind_page}>
                <div className={classes.ind_image}>
                    <img src={product.image} alt={product.id} />
                </div>
                <div className={classes.ind_details}>
                    <div className={classes.ind_company}>
                        <h2>{product.company}</h2>
                    </div>
                    <div className={classes.ind_model}>
                        <h3>{product.model}</h3>
                    </div>
                    <div className={classes.ind_price}>
                        <h2>${product.price}</h2>
                    </div>
                    <div className={classes.ind_desc}>
                        <p>{product.description}</p>
                    </div>
                    <button onClick={()=>addToCart(product)}>Add To Cart</button>
                    <center><Link style={{ textDecoration: 'none' }} to='/cart' path={<UserCart />}><button className={classes.cartBtn}>Go to Cart</button></Link></center>
                    <center><Link style={{ textDecoration: 'none' }} to='/ac' path={<Ac />}><button className={classes.chBtn}>Go to AC's</button></Link></center>
                </div>
            </div>
        </>
    );
}
