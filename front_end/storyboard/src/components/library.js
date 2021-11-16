import React, { useState, useEffect, useRef } from 'react'
import Button from './homeComponents/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function library() {
    const [books, setBooks] = useState([])

    React.useEffect(()=>{
        axios.get('http://localhost:8080/library')
        .then((res) => {
            setBooks(res.data)
        })
      }, []) 

    return (
        <div className="library">
            <nav className='library_nav'>
            <Link to="/"><Button value='Home'/></Link>
            </nav>
            <div className='library_div'>
                {books.map((book, index)=>(
                <Link key={index} class="book-container" to={`/view/${book.id}`} target="_blank" rel="noreferrer noopener">
                    <div class="book">
                        <img alt="" src={book.pages[0]}/>
                    </div>
                    <h3>{book.title}</h3>
                    <p>By/ {book.userName}</p>
                </Link>
                ))}
            </div>
        </div>
    )
}
