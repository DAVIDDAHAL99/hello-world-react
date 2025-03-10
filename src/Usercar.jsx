import React, { useState } from 'react';
import './Usercar.css'
import myImage from './assets/images/myImage.jpg'

function Card({Name,Foi,About}){
    const[showAbout, setShowAbout]=useState(false);
    return(
        <div className='card-container rounded-2xl w-50 overflow-hidden shadow-sm bg-amber-100 mx-auto '>
                <div className="image-container ">
                    <img className='mx-auto rounded-b-lg'src={myImage} alt="my image" />
                </div>
                <div className="cardname">
                    <h3>{Name}</h3>
                </div>
                <div className='cardski'>
                    <h3>{Foi}</h3>
                </div>
                {showAbout && (
                <div className="about-section p-2 mt-2 bg-white shadow-md rounded-lg">
                    <p>{About}</p>
                </div>
            )}
            <button 
                className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg' 
                onClick={() => setShowAbout(!showAbout)}
            >
                {showAbout ? "Hide" : "View More"}
            </button>

        </div>
    )
}
export default Card