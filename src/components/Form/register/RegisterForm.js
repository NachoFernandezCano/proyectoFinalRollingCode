import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Loader from '../../util/loader/Loader'
import './registerForm.css'
import {BsFillPersonPlusFill} from 'react-icons/bs'

const RegisterForm = ({ setloaderRegister, handleRegister }) => {
  return (
    <>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-1" controlId="formBasicNombre">
          <Form.Label className='labelStyles'>Nombre</Form.Label>
          <Form.Control className='inputStyles' size='md' type="text" name='nombre' placeholder="Nombre" required />
          
          <Form.Label className='labelStyles'>Apellido</Form.Label>
          <Form.Control className='inputStyles' size='md' type="text" name='apellido' placeholder="Apellido" required />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label className='labelStyles'>Correo Electronico</Form.Label>
          <Form.Control className='inputStyles' size='md' type="email" name='email' placeholder="Ingresar correo electrónico" required />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label className='labelStyles'>Contraseña</Form.Label>
          <Form.Control className='inputStyles' size='md' type="password" name='password' placeholder="Contraseña" required />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicRepetirPassword">
          <Form.Label className='labelStyles'>Repetir Contraseña</Form.Label>
          <Form.Control className='inputStyles' size='md' type="password" name='repipassword' placeholder="Repetir Contraseña" required />
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
}

export default RegisterForm
