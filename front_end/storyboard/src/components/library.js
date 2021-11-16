import React from 'react'
import Button from './homeComponents/Button'
import { Link } from 'react-router-dom'

export default function library() {
    const [books, setBooks] = React.useState([1,1,1,1,1,1,1,1])
    return (
        <div className="library">
            <nav className='library_nav'>
            <Link to="/"><Button value='Home'/></Link>
            </nav>
            <div className='library_div'>
                {books.map((book, index)=>(
                <a key={index} class="book-container" href="https://theoutstanding.dev/" target="_blank" rel="noreferrer noopener">
                    <div class="book">
                        <img alt="" src=""/>
                    </div>
                    <h3>Title of the Book</h3>
                    <p>By/ Author</p>
                </a>
                ))}
            </div>
        </div>
    )
}
