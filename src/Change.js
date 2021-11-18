// import React from 'react '
// import {useState} from 'react'
import React,{useState} from 'react'
import './App.css';
function Change(){
    const[exNumber,Number]=useState(0)
    // let[exNumber,Number]=useState(0)
    // Number(exNumber--)
    // Number(exNumber++)
    // Number(exNumber=clear)

    
    return(
        <div>
            <p className="p">{exNumber}</p>
            <button onClick={()=>Number(exNumber-1)} className='button'> Decrease</button>
            <button onClick={()=>Number(exNumber+1)} className='button'> Increase</button>

            <button onClick={()=>Number(0)}className='button'> clear</button>


        </div>

        
    );
}
export default Change;