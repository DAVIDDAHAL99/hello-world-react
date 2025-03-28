import React, { useState } from 'react';
import './Usercar.css'
import myImage from './assets/images/myImage.jpg'
import bgimg from './assets/images/bgimg1.jpg'

function Card({Name,Foi,About}){
    const[showAbout, setShowAbout]=useState(false);
    return(
        <div className='card-container rounded-2xl w-90 min-h-[200px]  overflow-hidden shadow-lg bg-amber-100 mx-auto flex flex-col relative'>
                <div  className="image-container w-full h-40 bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${bgimg})` }}
                    
                ></div>
                <div className='relative w-full flex justify-center'>                    
                    <img className=' h-40 rounded-full border-white  absolute bottom-0 left-1/2 transform -translate-x-1/2  'src={myImage} alt="my image" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg ">{Name}</h3>
                <h3 className="text-sm text-gray-700">{Foi}</h3>
                </div>
                {showAbout && (
                <div className="about-section p-2 mt-2 bg-white flex-grow shadow-md rounded-lg overflow-hidden">
                    <p className='text-gray-700'>{About}</p>
                </div>
            )}
            <div className='mt-auto'>
            <button 
                className='mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg w-full' 
                onClick={() => setShowAbout(!showAbout)}
            >
                {showAbout ? "Hide" : "View More"}
            </button>
            </div>

        </div>
    )
}
export default Card