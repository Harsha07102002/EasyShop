import React from 'react'
import classes from '../css/Books.module.css'
import { booksData } from '../data/BooksData'
import { Link } from 'react-router-dom';


export default function Books() {
  const booksMinData = booksData.slice(0,6)
  return (
      <>
      <h1 className={classes.h1}>BOOKS</h1>
      <div className={classes.block}>
        {booksMinData.map((item) => (
          <div key={item.id}>
            <Link style={{textDecoration:'none',color:'black'}} to={`/books/${item.id}`}>
            <img src={item.image} alt={item.id} />
            <h6><center>{item.title},{item.author}</center></h6>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
