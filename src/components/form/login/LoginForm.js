import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../../util/loader/Loader'
import './login.css';
import { FiLogIn, FiAlertCircle } from "react-icons/fi";
import {BsHandThumbsUp} from "react-icons/bs"

const LoginForm = ({ handleLogin, setloaderUser, setShow }) => {
  const initialState = {
    email: '',
    password: ''
  };

  const [formValue, setformValue] = useState(initialState);
  const [disableBtn, setdisableBtn] = useState(true);
  const [valueMail, setvalueMail] = useState(false);
  const [valuePass, setvaluePass] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const smallsEmail = useRef(null);
  const smallsPass = useRef(null);

  const handleChange = (({ target: { name, value } }) => {
    setformValue({ ...formValue, [name]: value });
  });

  const habndleBlur = (input) => {
    if (input.current.name === 'email') {
      if (!isEmail(input.current.value.trim())) {
        setErrorFor(input, "No ingreso un email válido", smallsEmail.current)
      } else {
        setSuccessFor(input);
      }
    }

    if (input.current.name === 'password') {
      isPass(input);
    }
  }

  const handleKeyUp = (input) => {
    if (input.current.name === 'email') {
      if (!isEmail(input.current.value.trim())) {
        setErrorFor(input, "Dirección de email inválida", smallsEmail.current)
      } else {
        setSuccessFor(input);
      }
    }

    if (input.current.name === 'password') {
      isPass(input);
    }
    if (valueMail && valuePass) {
      setdisableBtn(false);
    } else {
      setdisableBtn(true);
    }
  }

  function setSuccessFor(input) {
    const formControl = input.current.parentElement;
    formControl.classList.remove("form__error");
    formControl.classList.add("form__success");
    if (input.current.name === "email") {
      setvalueMail(true);
    }
    if (input.current.name === "password") {
      setvaluePass(true);
    }
  }

  function setErrorFor(input, message, small) {
    const formControl = input.current.parentElement;
    formControl.classList.remove("form__success");
    formControl.classList.add("form__error");
    small.innerHTML = message;
    if (input.current.name === "email") {
      setvalueMail(false);
    }
    if (input.current.name === "password") {
      setvaluePass(false);
    }
  }

  function isEmail(email) {
    return /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email);
  }

  function isPass(password) {
    if (password.current.value === "") {
      setErrorFor(password, "Debe ingresar una contraseña válida", smallsPass.current)
    } else {
      setSuccessFor(password);
    }
  }


  return (
    <>
      <Form onSubmit={handleLogin} className='form'>
        <Form.Group className="form__group" controlId="formBasicEmail">
          <Form.Label className='form__label'> Correo Electronico </Form.Label>
          <input
            className='form__input'
            type="text"
            name='email'
            placeholder="Ingresar email"
            ref={email}
            onChange={handleChange}
            onKeyUp={() => handleKeyUp(email)}
            onBlur={() => habndleBlur(email)}
            autoComplete="off"
          />
          <div className='form__successicon'>
            <BsHandThumbsUp className="successIcon"/>
          </div>
          <div className="form__erroricon">
            <FiAlertCircle className='alertIcon'/>
          </div>
          <p ref={smallsEmail} className="form__message"></p>
        </Form.Group>
        <Form.Group className="form__group" controlId="formBasicPassword">
          <Form.Label className='form__label'>Password</Form.Label>
          <input
            className='form__input'
            type="password"
            name='password'
            placeholder="Ingresar contraseña"
            ref={password}
            onChange={handleChange}
            onKeyUp={() => handleKeyUp(password)}
            onBlur={() => habndleBlur(password)}
            autoComplete="off"
          />
          <div className="form__successicon">
            <BsHandThumbsUp className="successIcon"/>
          </div>
          <div className="form__erroricon">
            <FiAlertCircle className='alertIcon'/>
          </div>
          <p ref={smallsPass} className="form__message"></p>
        </Form.Group>
        <Form.Group className="d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Check className="checkBx" type="checkbox" label="Recuérdame" />
          <Link className="fgtPass" to='RecoverPassword' onClick={() => { setShow(false) }}> ¿Olvidaste la contraseña? </Link>
        </Form.Group>
        {setloaderUser ? (
          <Loader />
        ) : (
          <div></div>
        )
        }
        <Form.Group className="mb-3 d-flex justify-content-center mt-2" controlId="formBasicButton">
          <Button id='btnLogin' type="submit" disabled={disableBtn}>
            < FiLogIn id='btnLogo' />
            {' '}Ingresar
          </Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default LoginForm
