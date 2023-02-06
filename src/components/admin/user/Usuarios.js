import React from 'react'
import { Button } from 'react-bootstrap'
import Tablauser from '../table/Tablauser'

const Usuarios = () => {
  return (
    <>       
        <Tablauser/>
        <div className='m-4'>
            <Button variant='primary'>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 11h6m-3 -3v6" />
            </svg>
                {"  "}Nuevo
            </Button>
        </div>
    </>
  )
}

export default Usuarios