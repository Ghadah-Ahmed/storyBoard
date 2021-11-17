import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from './components/homeComponents/Button';
import './tutorial.css';


export default function Tutorial() {
    let navigate = useNavigate();
    const tutorial = React.useRef();
    const skip = () =>{
        navigate("/") 
    }

    return (
        <div ref={tutorial} className='tutorial_div'>
            <h1>Scroll ⟵ left and right ⟶ to learn more</h1>
            {/* <h1>Scroll ⟵ Left and Right ⟶ to Learn More</h1> */}
            <ul className='ul'>
                <li> <img src="https://d.top4top.io/p_2147kq6bo1.png" className='img' alt="cut citrus fruits. " />First you have to choose your character</li>
                <li> <img src="https://h.top4top.io/p_21477llts1.png" className='img' alt="sliced mango. " />Then you can design it the way you like</li>
                <li> <img src="https://e.top4top.io/p_2145g27rh1.png" className='img' alt="a bunch of blueberries. " />Amet Consectetur</li>
                <li> <img src="https://e.top4top.io/p_2145g27rh1.png" className='img' alt="cut citrus fruits. " />Lorem Ipsum</li>
                <li> <img src="https://e.top4top.io/p_2145g27rh1.png" className='img' alt="sliced mango. " />Dolor Sit</li>
                <li> <img src="https://e.top4top.io/p_2145g27rh1.png" className='img' alt="a bunch of blueberries. " />Amet Consectetur</li>
                <li> <img src="https://e.top4top.io/p_2145g27rh1.png" className='img' alt="cut citrus fruits. " />Lorem Ipsum</li>
                <li> <img src="https://e.top4top.io/p_2145g27rh1.png" className='img' alt="sliced mango. " />Dolor Sit</li>
                <li> <img src="https://e.top4top.io/p_2145g27rh1.png" className='img' alt="a bunch of blueberries. " />Amet Consectetur</li>
            </ul>
            <Button value='Skip' handleEvent={skip}/>
        </div>
    )
}
