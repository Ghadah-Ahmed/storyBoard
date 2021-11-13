import React, { useState, useEffect, useRef } from 'react'

export default function Remix(props) {
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
        <div ref={remixDiv} onMouseDown={() => props.setElement(remixDiv)}  className="popup popup--remix none">
                    <div className="popup__container visible">
                        <button className="popup__close">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292894 0.292893C-0.0976301 0.683417 -0.0976301 1.31658 0.292894 1.70711L2.58579 4L0.292894 6.29289C-0.09763 6.68342 -0.09763 7.31658 0.292894 7.70711C0.683419 8.09763 1.31658 8.09763 1.70711 7.70711L4 5.41421L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711C8.09763 7.31658 8.09763 6.68342 7.70711 6.29289L5.41421 4L7.70711 1.70711C8.09763 1.31658 8.09763 0.683417 7.70711 0.292893C7.31658 -0.0976311 6.68342 -0.0976311 6.29289 0.292893L4 2.58579L1.70711 0.292893Z" fill="#363D61"></path>
                            </svg>
                        </button>
                        <div  onMouseDown={() => props.setDraggable(true)} onMouseUp={() => props.setDraggable(false)} className="popup__head">Remix</div>
                        <div className="popup__body">
                            <div ref={remix} className="remix">

                                <div className="remix__item active">
                                    <div className="remix__wrapper">
                                        <div className="remix__preview"><img className="remix__pic" src="https://sapiens.ui8.net/images/male/head/colorful/8.svg" alt="Preview"/></div>
                                    </div>
                                    <button className="remix__prev">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path></svg>
                                    </button>
                                    <button className="remix__next">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="remix__item">
                                    <div className="remix__wrapper">
                                        <div className="remix__preview"><img className="remix__pic" src="/images/male/head/colorful/8.svg" alt="Preview"/></div>
                                    </div>
                                    <button className="remix__prev">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path></svg>
                                    </button>
                                    <button className="remix__next">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="remix__item">
                                    <div className="remix__wrapper">
                                        <div className="remix__preview"><img className="remix__pic" src="/images/male/head/colorful/8.svg" alt="Preview"/></div>
                                    </div>
                                    <button className="remix__prev">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path></svg>
                                    </button>
                                    <button className="remix__next">
                                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3437 6.28606L2.02902 9.79182C1.8257 9.92495 1.59539 9.99661 1.36036 9.99988C1.12534 10.0032 0.893538 9.93792 0.687365 9.81049C0.480038 9.68228 0.306925 9.49369 0.18604 9.26433C0.0651548 9.03497 0.000913103 8.77323 0 8.50633L0 1.49483C0.000702244 1.2277 0.0648441 0.965681 0.18574 0.736067C0.306636 0.506453 0.479863 0.317653 0.687365 0.189339C0.893358 0.0620207 1.12495 -0.00315305 1.35977 0.000117281C1.59459 0.00338761 1.82469 0.0749914 2.02784 0.208007L7.34252 3.71509C7.54241 3.84534 7.70841 4.0327 7.82382 4.25836C7.93924 4.48401 8 4.74 8 5.00058C8 5.26116 7.93924 5.51714 7.82382 5.7428C7.70841 5.96845 7.54359 6.15582 7.3437 6.28606Z" fill="white"></path>
                                        </svg>
                                    </button>
                                </div>
                
                            </div>        
                        </div>
                    </div>
                </div>  
    )
}
