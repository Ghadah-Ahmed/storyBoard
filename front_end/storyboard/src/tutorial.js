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
                <li> <img src="https://k.top4top.io/p_2147u11iz1.png" className='img' alt="a bunch of blueberries. " />Then you can choose the background </li>
                <li> <img src="https://j.top4top.io/p_2147t6l6m1.png" className='img' alt="a bunch of blueberries. " />Here you can write your story</li>
                <li> <img src="https://d.top4top.io/p_2147l8gn91.png" className='img' alt="cut citrus fruits. " />Here you can add another page. </li>
                <li> <img src="https://l.top4top.io/p_2147ck0po1.png" className='img' alt="sliced mango. " />Create your pages </li>
                <li> <img src="https://g.top4top.io/p_2147m9hvx1.png" className='img' alt="cut citrus fruits. " />Images from your local </li>
                <li> <img src="https://a.top4top.io/p_2147parzd1.png" className='img' alt="sliced mango. " />Go to export to see your work</li>
                <li> <img src="https://l.top4top.io/p_21477iywa1.png" className='img' alt="a bunch of blueberries. " />You can see all books from library</li> 
            </ul>
            <Button value='Skip' handleEvent={skip}/>
        </div>
    )
}
