import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
import {AiFillCloseCircle} from "react-icons/ai"
const Header = () => {
    const [active, setActive] = useState(false)
    return (
        <React.Fragment>
           <header>
            <h2>Logo</h2>
            {
                !active && <GiHamburgerMenu onClick={()=>{
                setActive(true)
            }}/>
            }
            
        </header> 
        {
            active &&  <div className="menu">
            <ul>
                <li>option</li>
                <li>option</li>
                <li>option</li>
                <li>option</li>
            </ul>
            <AiFillCloseCircle onClick={()=>{
                setActive(false)
            }}/>
        </div>
        }
       
        </React.Fragment>
        
    );
};

export default Header;