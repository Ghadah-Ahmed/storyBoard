import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Turn from '../components/displayComonents/Turn'
import $ from "jquery";
import Button from '../components/homeComponents/Button';
import axios from 'axios';

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
  

export default function View() {
    const { id } = useParams();
    const [pages, setPages] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/library/${id}`)
        .then((res) => {
            setPages(res.data[0].pages)
        })
      }, []) 

        return (
          <div style={{ height: '100vh'}} className='display-container'>
            <div className='display-nav'>
            <Link to="/library">
              <Button value='Library'/>
            </Link>
            </div>
           { pages.length !== 0 ? <Turn options={options} className="magazine">
                    {pages.map((page, index) => (
                <div style={{backgroundColor: 'white', display: 'flex', alignItems: 'center'}} key={index} className="page">
                  <img src={page} alt="" />
                </div>
              ))}
            </Turn> : ''}
          </div>
        )
}