import React, { useState, useEffect, useRef } from 'react'
import male from '../images/male.svg'
import female from '../images/female.svg'
import MenuButton from './MenuButton';

export default function GenderMenu({handleEvent}) {

    const girl = () =>{
        console.log('girl')
    }
    const guy = () =>{
        console.log('guy')
    }
    return (
        <div className=" menu--sex">
                <MenuButton handleClick={guy} handleEvent={handleEvent} img={male} value='Male' />
                <MenuButton handleClick={girl} handleEvent={handleEvent} img={female} value='Female' />   
        </div>


    )
}
