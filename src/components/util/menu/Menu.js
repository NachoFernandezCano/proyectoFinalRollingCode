import React from 'react'
import { useNavigate } from 'react-router-dom';
import './menu.css';
import {
    FaTh,
    FaDollarSign,
    FaHome
} from "react-icons/fa"

const Menu = () => {
    let navigate = useNavigate();   

    const handledHome = ()=>{
        navigate("/");
    };

    const handleArticulos = ()  =>{
        navigate("/Table");
    }

    return (
        <>
            <div id="right-info">
                <ul>                    
                    <li>
                        <a href="#" title="Articulos" onClick={handleArticulos}>
                            <i><FaTh/></i>
                            Articulos
                        </a>
                    </li>                    
                    <li>
                        <a href="#" title="Home" onClick={handledHome}>                            
                            <i><FaHome/></i>
                            Home
                        </a>
                    </li>                  
                </ul>
            </div>
        </>
    )
}

export default Menu