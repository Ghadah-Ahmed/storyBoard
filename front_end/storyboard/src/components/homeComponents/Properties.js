import React from 'react'
import male from '../images/male.svg'
import female from '../images/female.svg'
import MenuButton from './MenuButton';

export default function Properties({handleEvent}) {
    const text = () =>{
        console.log('text')
    }
    const filter = () =>{
        console.log('filter')
    }
    return (
        <div className="menu menu--properties">
                <MenuButton handleClick={text} handleEvent={handleEvent} img={male} value='Text' />
                <MenuButton handleClick={filter} handleEvent={handleEvent} img={female} value='Filter' />  
        </div>


    )
}
