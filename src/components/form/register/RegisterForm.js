import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Loader from '../../util/loader/Loader'
import './registerForm.css'
import { BsFillPersonPlusFill } from 'react-icons/bs'

const RegisterForm = ({ setloaderRegister, handleRegister }) => {
  return (
    <>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formRegNombre">
          <Form.Label className='labelStyles'>Nombre</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="text" name='nombre' placeholder="Nombre"
            minLength={3} maxLength={30} required />
        </Form.Group>
        <Form.Group controlId="formRegApellido">
          <Form.Label className='labelStyles'>Apellido</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="text" name='apellido'
            minLength={3} maxLength={30} placeholder="Apellido" required />
        </Form.Group>
        <Form.Group className="registerFormGroup" controlId="formRegDir">
          <Form.Label className='labelStyles'>Dirección</Form.Label>
          <Form.Control name='direccion[calle]' className='inputStyles' size='lg' placeholder="Calle" minLength={3} maxLength={30} />
          <Form.Control name='direccion[nro]' className='inputStyles' size='lg' placeholder="Número" minLength={1} maxLength={10} />
          <Form.Control name='direccion[dpto]' className='inputStyles' size='lg' placeholder="Departamento" minLength={1} maxLength={5} />
          <Form.Control name='direccion[provincia]' className='inputStyles' size='lg' placeholder="Provincia" minLength={3} maxLength={20} />
          <Form.Control name='direccion[localidad]' className='inputStyles' size='lg' placeholder="Localidad" minLength={3} maxLength={20} />
          <Form.Control name='direccion[codigopostal]' className='inputStyles' size='lg' placeholder="Código postal" minLength={1} maxLength={8} />
          <Form.Label />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className='labelStyles'>Correo Electronico</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="email" name='email'
            minLength={3} maxLength={35} placeholder="Ingresar correo electrónico" required />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className='labelStyles'>Contraseña</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="password" name='password'
            minLength={8} maxLength={30} placeholder="Contraseña" required />
        </Form.Group>
        <Form.Group controlId="formBasicRepetirPassword">
          <Form.Label className='labelStyles'>Repetir Contraseña</Form.Label>
          <Form.Control className='inputStyles' size='lg' type="password" name='repPassword'
            minLength={3} maxLength={30} placeholder="Repetir Contraseña" required />
        </Form.Group>
        {setloaderRegister ? (
          <Loader />
        ) : (
          <div></div>
        )
        }
        <Form.Group className="mb-3 d-flex justify-content-around" controlId="formBasicButton">
          <Button type="submit" id='btnRegister'>
            <BsFillPersonPlusFill className='btnLogo' />
            {' '}Registrarse
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default RegisterForm
