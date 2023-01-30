import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Loader from '../../util/loader/Loader'
import registerForm from './registerForm.css'
import {BsFillPersonPlusFill} from 'react-icons/bs'

<<<<<<< HEAD


const RegisterForm = ({setloaderRegister, handleRegister}) => {
    return (
        <>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-1" controlId="formBasicNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control size='sm' type="text" autoCapitalize={'characters'} name='nombre' placeholder="Nombre" required />         
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicApeliido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control size='sm' type="text" name='apellido' placeholder="Nombre" required/>         
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control size='sm' type="email" name='email' placeholder="Ingresar email" required/>             
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size='sm' type="password" name='password' placeholder="Password" required/>              
            </Form.Group>                    
            <Form.Group className="mb-1" controlId="formBasicRepetirPassword">
                <Form.Label>Repetir Password</Form.Label>
                <Form.Control size='sm' type="password" name='repipassword' placeholder="Password" required/>
            </Form.Group>        
            {setloaderRegister ?(
                        <Loader /> 
                    ):(
                        <div></div>
                    ) 
                }
            <Form.Group className="mb-3 d-flex justify-content-around" controlId="formBasicButton">             
                <Button type="submit" variant='success'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 11h6m-3 -3v6" />
                </svg>
                    {' '}Registrar
                </Button>              
            </Form.Group>            
        </Form>
        </>
    )
=======
const RegisterForm = ({ setloaderRegister, handleRegister }) => {
  return (
    <>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-1" controlId="formBasicNombre">
          <Form.Label className='labelStyles'>Nombre y Apellido</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="text" name='name' placeholder="Nombre y Apellido" required />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label className='labelStyles'>Correo Electronico</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="email" name='email' placeholder="Ingresar correo electrónico" required />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label className='labelStyles'>Contraseña</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="password" name='password' placeholder="Contraseña" required />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicRepetirPassword">
          <Form.Label className='labelStyles'>Repetir Contraseña</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="password" name='repipassword' placeholder="Repetir Contraseña" required />
        </Form.Group>
        {setloaderRegister ? (
          <Loader />
        ) : (
          <div></div>
        )
        }
        <Form.Group className="mb-3 d-flex justify-content-around" controlId="formBasicButton">
          <Button type="submit" id='btnRegister'>
            <BsFillPersonPlusFill className='btnLogo'/>
            {' '}Registrarse
          </Button>
        </Form.Group>
      </Form>
    </>
  )
>>>>>>> develop
}

export default RegisterForm
