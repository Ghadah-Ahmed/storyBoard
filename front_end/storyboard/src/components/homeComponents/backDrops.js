import React, { useState, useEffect, useRef } from 'react'
import x from '../images/x.svg'

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
        e.target.parentElement.classList.add('active')
        console.log(parseInt(id.replace('page','')))
        var key =`p${id.replace('page','')}`
        setImg( {...img, [key]:  `${e.target.src.replace('previews/','')}`})
      }

    return (
        <div ref={backdropsDiv} onMouseDown={() =>setElement(backdropsDiv)} className="popup popup--backdrops none">
        <div className="popup__container visible">

            <button onClick={()=> backdropsDiv.current.classList.add('none')} className="popup__close">
                <img src={x}/>
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
