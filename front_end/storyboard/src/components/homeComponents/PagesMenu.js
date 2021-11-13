import React from 'react'
import male from '../images/male.svg'
import female from '../images/female.svg'
import MenuButton from './MenuButton';

export default function PagesMenu({handleEvent, setId}) {

    const showSlide = (e) =>{
        setId(e.target.parentElement.children[1].innerHTML || e.target.parentElement.children[1].alt)
    }
    return (
        <div className="menu menu--pages">
                <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={male} value='Page 1' />
                <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={female} value='Page 2' />  
                <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={female} value='Page 3' />   
                <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={female} value='Page 4' />   
                <MenuButton handleClick={showSlide} handleEvent={handleEvent} img={female} value='Page 5' />    
        </div>


    )
}
