import React, { useState, useEffect, useRef } from 'react'

export default function BackDrops({setBackdropsDiv, setElement, setDraggable, setImg, img, id}) {
    const backdrops = useRef();
    const backdropsDiv = useRef();


     useEffect(() => {
        setBackdropsDiv(backdropsDiv)
        let children = backdrops.current.children;
        Object.values(children).map((child)=>{
            var newChild = child.cloneNode(true)
            newChild.addEventListener('click', (e) => changeBackground(e, id))
            child.replaceWith(newChild);
        })
      }, [id])
      
      const changeBackground = (e, id) =>{
        let children = backdrops.current.children;
        Object.values(children).map((child, index)=>{
            child.classList.remove('active')
        })
        setImg( {...img, [id.replace(' ','').toLowerCase()]: `${e.target.src.replace('previews/','')}`})
        e.target.parentElement.classList.add('active')
      }

    return (
        <div ref={backdropsDiv} onMouseDown={() =>setElement(backdropsDiv)} className="popup popup--backdrops none">
        <div className="popup__container visible">

            <button onClick={()=> backdropsDiv.current.classList.add('none')} className="popup__close">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292894 0.292893C-0.0976301 0.683417 -0.0976301 1.31658 0.292894 1.70711L2.58579 4L0.292894 6.29289C-0.09763 6.68342 -0.09763 7.31658 0.292894 7.70711C0.683419 8.09763 1.31658 8.09763 1.70711 7.70711L4 5.41421L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711C8.09763 7.31658 8.09763 6.68342 7.70711 6.29289L5.41421 4L7.70711 1.70711C8.09763 1.31658 8.09763 0.683417 7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L4 2.58579L1.70711 0.292893Z" fill="#363D61"></path>
                </svg>
            </button>

            <div onMouseDown={() => setDraggable(true)} onMouseUp={() => setDraggable(false)}  className="popup__head">Backdrops</div>

            <div className="popup__body">
                <div ref={backdrops}  className="backdrops">
                    <div className="backdrops__item active"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/0.svg" alt="Backdrop 0"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/1.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/2.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/3.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/4.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/5.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/6.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/7.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/8.svg" alt="Backdrop 1"/></div>
                    <div className="backdrops__item"><img className="backdrops__pic" src="https://sapiens.ui8.net/images/backdrops/colorful/previews/9.svg" alt="Backdrop 1"/></div>
                </div>
            </div>

        </div>
    </div>
    )
}
