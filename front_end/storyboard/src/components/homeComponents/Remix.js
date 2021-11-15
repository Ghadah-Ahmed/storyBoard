import React, { useState, useEffect, useRef } from 'react'
import RemixDiv from './RemixDiv'

// face
import facial1 from '../images/facial_exp-1.svg'
import facial2 from '../images/facial_exp-2.svg'
import facial3 from '../images/facial_exp-3.svg'
import facial4 from '../images/facial_exp-4.svg'
import facial5 from '../images/facial_exp-5.svg'


// dress
import dress1 from '../images/dress-1.svg'
import dress2 from '../images/dress-2.svg'
import dress3 from '../images/dress-3.svg'
import dress4 from '../images/dress-4.svg'
import dress5 from '../images/dress-5.svg'


// hair
import hair1 from '../images/hair-1.svg'
import hair2 from '../images/hair-2.svg'
import hair3 from '../images/hair-3.svg'
import hair4 from '../images/hair-4.svg'
import hair5 from '../images/hair-5.svg'


// shoes
import shoes1 from '../images/shoes-1.svg'
import shoes2 from '../images/shoes-2.svg'
import shoes3 from '../images/shoes-3.svg'
import shoes4 from '../images/shoes-4.svg'
import shoes5 from '../images/shoes-5.svg'

export default function Remix(props) {
    const shoes =[shoes5, shoes4, shoes3, shoes2, shoes1];
    const dress =[dress5, dress4, dress3, dress2, dress1];
    const hair =[hair5, hair4, hair3, hair2, hair1];
    const face =[facial5, facial4, facial3, facial2, facial1];

    const remix = useRef();
    const remixDiv = useRef();


    useEffect(() => {
       let children = remix.current.children;
       Object.values(children).map((child)=>{
           child.addEventListener('mouseover', (e) => changeRemix(e))
       })
     }, [])
     
     const changeRemix = (e) =>{
       let children = remix.current.children;
       Object.values(children).map((child)=>{
           child.classList.remove('active')
       })
    //    console.log(e.target.parentElement)
       e.target.parentElement.classList.add('active')
       e.target.parentElement.parentElement.classList.add('active')
       e.target.parentElement.parentElement.parentElement.classList.add('active')
     }

    return (
        <div ref={remixDiv} onMouseDown={() => props.setElement(remixDiv)}  className="popup popup--remix">
                    <div className="popup__container visible">
                        <button className="popup__close">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292894 0.292893C-0.0976301 0.683417 -0.0976301 1.31658 0.292894 1.70711L2.58579 4L0.292894 6.29289C-0.09763 6.68342 -0.09763 7.31658 0.292894 7.70711C0.683419 8.09763 1.31658 8.09763 1.70711 7.70711L4 5.41421L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711C8.09763 7.31658 8.09763 6.68342 7.70711 6.29289L5.41421 4L7.70711 1.70711C8.09763 1.31658 8.09763 0.683417 7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L4 2.58579L1.70711 0.292893Z" fill="#363D61"></path>
                            </svg>
                        </button>
                        <div  onMouseDown={() => props.setDraggable(true)} onMouseUp={() => props.setDraggable(false)} className="popup__head">Remix</div>
                        <div className="popup__body">
                            <div ref={remix} id='remix' className="remix">
                                <RemixDiv setRemixID={props.setRemixID} remixID={props.remixID} part={'hair'} SliderData={hair}/>
                                <RemixDiv setRemixID={props.setRemixID} remixID={props.remixID} part={'face'} SliderData={face}/>
                                <RemixDiv setRemixID={props.setRemixID} remixID={props.remixID} part={'dress'} SliderData={dress}/>
                                <RemixDiv setRemixID={props.setRemixID} remixID={props.remixID} part={'shoes'} SliderData={shoes}/>
                            </div>        
                        </div>
                    </div>
                </div>  
    )
}
