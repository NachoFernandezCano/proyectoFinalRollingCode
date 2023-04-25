import React from 'react'
import "./sellPage.css"
import { Link } from 'react-router-dom'

const SellPage = () => {
    return (
        <div className='containerDiv'>
            <h1>Compra realizada con exito</h1>
            <h4>Ponto su pedido llegara a su dirección</h4>
            <Link to={"/"}>
                <button>
                    Regresar al Inicio
                </button>
            </Link>
        </div>
    )
}

export default SellPage