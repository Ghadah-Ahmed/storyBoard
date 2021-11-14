import React from 'react'
import male from '../images/male.svg'
import MenuButton from './MenuButton';

export default function PagesMenu({handleEvent, setId, num}) {

    const showSlide = (e) =>{
        setId(e.target.parentElement.children[1].innerHTML || e.target.parentElement.children[1].alt)
    }

    return (
        <div className="menu menu--pages">
            <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={male} value='Page 1' />
            {num.map((num, index)=>(
                <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={male} value={`Page ${index+2}`} />
            ))}
        </div>
    )
}
