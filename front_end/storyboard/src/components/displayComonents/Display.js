import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Turn from './Turn'
import $ from "jquery";
import Button from '../homeComponents/Button';
import background from '../images/background-grid.jpeg'
import { useSelector } from "react-redux";

const options = {
    width: 1000,
    height: 500,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
      turned: function(e, page) {
        console.log("Current view: ", $(this).turn("view"));
      }
    }
  };
  
  const pages = [
    "https://sapiens.ui8.net/images/backdrops/colorful/1.svg",
    "https://sapiens.ui8.net/images/backdrops/colorful/2.svg",
    "https://sapiens.ui8.net/images/backdrops/colorful/3.svg",
    "https://sapiens.ui8.net/images/backdrops/colorful/4.svg",
    "https://sapiens.ui8.net/images/backdrops/colorful/5.svg",
    "https://sapiens.ui8.net/images/backdrops/colorful/6.svg"
  ];


export default function Display() {
  const state = useSelector((state) => {
    return {
      pages: state.pages.pages,
    };
  });

  React.useEffect(() => {
     console.log(state.pages)
  }, [])

    return (
      <div style={{backgroundImage: `url(${background})`, height: '100vh'}} className='display-container'>
        <div className='display-nav'>
        <Link to="/">
          <Button value='Home'/>
        </Link>
          <Button value='Publish'/>
        </div>
        <Turn options={options} className="magazine">
                {state.pages.map((page, index) => (
            <div style={{backgroundColor: 'white', display: 'flex', alignItems: 'center'}} key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn>
      </div>
    )
}
