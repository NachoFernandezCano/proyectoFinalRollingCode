import React from 'react'
import { useNavigate } from 'react-router-dom';
import './menu.css';


const Menu = () => {
    let navigate = useNavigate();   

    const handledHome = ()=>{
        navigate("/");
    };

    return (
        <>
            <div id="right-info">
                <ul>                    
                    <li>
                        <a href="#" title="Articulos">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-package" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                                <line x1="12" y1="12" x2="20" y2="7.5" />
                                <line x1="12" y1="12" x2="12" y2="21" />
                                <line x1="12" y1="12" x2="4" y2="7.5" />
                                <line x1="16" y1="5.25" x2="8" y2="9.75" />
                            </svg>
                            Articulos
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Ventas">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-businessplan" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <ellipse cx="16" cy="6" rx="5" ry="3" />
                                    <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                    <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                    <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                    <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                    <path d="M5 15v1m0 -8v1" />
                                </svg>
                                Ventas
                            </i>
                            
                        </a>
                    </li>  
                    <li>
                        <a href="#" title="Home" onClick={handledHome}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                            Home
                        </a>
                    </li>                  
                </ul>
            </div>
        </>
    )
}

export default Menu