import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import domtoimage from "dom-to-image";
import { useDispatch } from "react-redux";
import { addPages } from '../../reducers/pages/pages';

import background from '../images/background-grid.jpeg'
import logo from '../images/logo.svg'
import arrow from '../images/arrow.svg'
import GenderMenu from './genderMenu'
import BackDrops from './backDrops'
import Remix from './Remix'
import Button from './Button'
import PagesMenu from './PagesMenu'
import Properties from './Properties'

export default function Home() {
    const [draggable, setDraggable] = useState(false)
    const [element, setElement] = useState([])
    const [backdropsDiv, setBackdropsDiv] = useState([])
    const [num, setNum] = React.useState([])
    const [img, setImg] = useState([])
    const [id, setId] = useState('page1')
    const pagesContainer = useRef();
    const dispatch = useDispatch();


    function exportToPng() {
        const scale = 2;
        const allChildren = pagesContainer.current.children;
        Object.values(allChildren).map((el)=>{  
            el.classList.remove('none')
            domtoimage
            .toPng(el, {
                height: el.offsetHeight * scale,
                width: el.offsetWidth * scale,
                style: {
                margin: 0,
                border: 'none',
                position: 'static',
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width: `${el.offsetWidth}px`,
                height: `${el.offsetHeight}px`
                }
            })
            .then(function (dataUrl) {
                dispatch(addPages(dataUrl))
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error);
            });
        });
      }

    const handleEvent = (event, button) => {
        let b = button.current;
        if (event.type === "mousedown") {
                    b.classList.add('menu-down')
                    b.children[1].classList.add('none')
           } else {
                   let allButtons =  b.parentElement.parentElement.children;
                   Object.values(allButtons).map((button)=>{
                        button.children[0].classList.remove('menu-up');
                        button.children[0].children[1].classList.remove('none')
                        button.children[0].children[0].classList.remove('filter')
                        button.children[1].classList.remove('title')
                   })
                    b.classList.remove('menu-down')
                    b.classList.add('menu-up')
                    b.children[1].classList.add('none')
                    b.children[0].classList.add('filter')
                    b.parentElement.children[1].classList.add('title')
           }
       }
     
    const move = (e) =>{
        if(draggable){
            element.current.style.top = `${e.clientY-20}px`;
            element.current.style.left = `${e.clientX-115}px`;
        }
    }
    const show = (e) =>{
        backdropsDiv.current.classList.remove('none');
        backdropsDiv.current.style.top = `${e.clientY}px`;
        backdropsDiv.current.style.left = `${e.clientX}px`;
    }
    const addButton = () =>{
        setNum([...num, ''])
     }

    useEffect(() => {
        var idName = id.replace(' ','').toLowerCase()
        var element = document.getElementById(idName);
        var allChildren = element.parentElement.children
        Object.values(allChildren).map((child)=>{
            child.classList.add('none')
        })
        element.classList.remove('none')
    }, [id])

    return (
        <div onMouseMove={(e)=> move(e)} style={{backgroundImage: `url(${background})`, height: '100vh'}}>

            <div className='header'>
               <img className='logo' src={logo}/>
               <GenderMenu handleEvent={handleEvent} />
               <Link to="/display"><Button value={<span>Export <img src={arrow}/> </span>}/></Link>
            </div>

            <div className='play-ground-container'>
                <Properties handleEvent={handleEvent}/>
                <div ref={pagesContainer} onClick={(e) => show(e)} className='play-ground'>
                    <div style={{backgroundImage: `url(${img[1]})`}} id={`page1`} className='page-area none'></div>
                    {num.map((num, index) => (
                      <div style={{backgroundImage: `url(${img[index+2]})`}} id={`page${index+2}`} className='page-area none'></div>   
                    ))}
                </div>
                <PagesMenu num={num} setNum={setNum} setId={setId} handleEvent={handleEvent}/>
                <BackDrops id={id} img={img} setImg={setImg}  setElement={setElement} setDraggable={setDraggable} setBackdropsDiv={setBackdropsDiv}/>
                <Remix  setElement={setElement} setDraggable={setDraggable}/>
            </div>

            <div className='footer'>
                <Button value={'Library'}/>
                <Button value={'Save'} handleEvent={exportToPng}  />
                <Button value={'Add page'} handleEvent={addButton} />
            </div>


        </div>
    )
}
