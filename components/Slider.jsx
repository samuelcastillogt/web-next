import React from 'react';
import { useState } from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
const Slider = () => {
    const [active, setActive] = useState(0)
    const sliderItem = [{
        title: "Primer",
        img: "https://uploads-ssl.webflow.com/5b217fd3093e3eaeb856fbda/5b9a8855505ecabcf36a6897_banner-4marcas1.png"
    },
    {
        title: "segundo",
        img: "https://uploads-ssl.webflow.com/5b217fd3093e3eaeb856fbda/5c927d5d89862684bae33fa7_cs-1.jpg"
    }
]       
    const up = ()=>{
        if(active == sliderItem.length-1){
            setActive(0)
        }else{
            setActive(active +1)
        }
    }
    const donw = ()=>{
        console.log("abajo")
        if(active == 0){
            setActive(sliderItem.length-1)
        }else{
            setActive(active -1)
        }
    }
    return (
        <div className='slider' style={{
            backgroundImage: `url("${sliderItem[active].img}")`
        }}>
            <div className="slider-content">
               <AiFillCaretLeft onClick={donw}/>
            <p>{sliderItem[active].title}</p> 
            <AiFillCaretRight onClick={up}/>
            </div>
            
        </div>
    );
};

export default Slider;