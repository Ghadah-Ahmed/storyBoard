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
import Female from './female';
import Male from './male';
import Tutorial from '../../tutorial';

export default function Home() {
    const [draggable, setDraggable] = useState(false)
    const [contenteditable, setContenteditable] = useState(false)
    const [element, setElement] = useState([])
    const [backdropsDiv, setBackdropsDiv] = useState([])
    const [num, setNum] = useState([])
    const [img, setImg] = useState({p0: ""})
    const [remixFID, setRemixFID] = useState({p1:{shoes: 0, dress: 0, face: 0, hair: 0, backHair: 0}})
    const [remixMID, setRemixMID] = useState({p1:{shoes: 0, shirt: 0, face: 0, hair: 0, pant: 0, beard: 0}})
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
                backgroundColor: 'white',
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
        // backdropsDiv.current.style.top = `${e.clientY}px`;
        // backdropsDiv.current.style.left = `${e.clientX}px`;
    }
    const addButton = () =>{
        setNum([...num, ''])
     }

    useEffect(() => {
        var element = document.getElementById(id);
        var allChildren = element.parentElement.children
        Object.values(allChildren).map((child)=>{
            child.classList.add('none')
        })
        element.classList.remove('none')
    }, [id])

    useEffect(() => {
        var key =`p${num.length+1}`
        setRemixFID({...remixFID, [key]: {...remixFID[key], shoes: 0, dress: 0, face: 0, hair: 0, backHair: 0}})
        setRemixMID({...remixMID, [key]: {...remixMID[key], shoes: 0, shirt: 0, face: 0, hair: 0, pant: 0, beard: 0}})
    }, [num])
    // useEffect(() => {
    //     console.log(remixMID)  
    // }, [remixMID])
    return (
        <div>
        <div onMouseMove={(e)=> move(e)} style={{backgroundImage: `url(${background})`, height: '100vh'}}>
            <div className='header'>
               <img className='logo' src={logo}/>
               <GenderMenu id={id} handleEvent={handleEvent} />
               <Link to="/display"><Button value={<span>Export <img src={arrow}/> </span>}/></Link>
            </div>

            <div className='play-ground-container'>
                <Properties id={id} handleEvent={handleEvent}/>
                <div ref={pagesContainer} onClick={(e) => show(e)} className='play-ground'>
                    <div style={{backgroundImage: `url(${img['p'+1]})`}} id={`page1`} className='page-area none'>
                         <Female id={id} remixID={remixFID}/>
                         <Male id={id}  remixID={remixMID}/> 
                         <div onClick={()=> setContenteditable(true) } suppressContentEditableWarning={true} onBlur={()=> setContenteditable(false) }  contentEditable={contenteditable? "true": 'false'} className='play-ground-text none'>Add Text</div></div>
                    {num.map((num, index) => (
                      <div key={index} style={{backgroundImage: `url(${img['p'+(index+2)]})`}} id={`page${index+2}`} className='page-area none'>
                         <Female id={id} remixID={remixFID}/> 
                         <Male id={id}  remixID={remixMID}/>
                         <div onClick={()=> setContenteditable(true) } suppressContentEditableWarning={true} onBlur={()=> setContenteditable(false) }  contentEditable={contenteditable? "true": 'false'} className='play-ground-text none'>Add Text</div></div>   
                    ))}
                </div>
                <PagesMenu num={num} setNum={setNum} setId={setId} handleEvent={handleEvent}/>
                <BackDrops id={id} img={img} setImg={setImg}  setElement={setElement} setDraggable={setDraggable} setBackdropsDiv={setBackdropsDiv}/>
                <Remix id={id} setRemixID={setRemixFID} remixID={remixFID} gender={'female'}  setElement={setElement} setDraggable={setDraggable}/>
                <Remix id={id}  setRemixID={setRemixMID} remixID={remixMID} gender={'male'}  setElement={setElement} setDraggable={setDraggable}/>
            </div>

            <div className='footer'>
                <Link to="/library"><Button value={'Library'}/></Link>
                <Button value={'Save'} handleEvent={exportToPng}  />
                <Button value={'Add page'} handleEvent={addButton} />
            </div>
        </div>
        <Tutorial/>
        </div>
    )
}
