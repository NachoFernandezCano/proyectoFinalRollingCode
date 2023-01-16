import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../../util/loader/Loader'
import './login.css';

const LoginForm = ({handleLogin, setloaderUser, setShow}) => { 
    const initialState={
        email:'',
        password:''
    }
    let valueemail=false;
    let valuepass=false;

    const [formValue, setformValue] = useState(initialState);
    const [disableBtn, setdisableBtn] = useState(true);
    const [valueMail, setvalueMail] = useState(false);
    const [valuePass, setvaluePass] = useState(false);
    
    const email = useRef(null);
    const password = useRef(null);

    const smallsEmail = useRef(null);
    const smallsPass = useRef(null);

    /*-----------------------------------------------------------------------------------------------------*/
    const handleChange =(({target:{name,value}})=>{
        setformValue({...formValue, [name]:value});        
    });
    /*-----------------------------------------------------------------------------------------------------*/
    const habndleBlur=(input)=>{
        if(input.current.name==='email'){
            if(!isEmail(input.current.value.trim())) {
                setErrorFor(input,"No ingreso un email válido", smallsEmail.current)
            }else{
                setSuccessFor(input);
            }
        }       

        if(input.current.name==='password'){
            isPass(input);
        }
        //checkInputs();
    }
    /*-----------------------------------------------------------------------------------------------------*/
    const handleKeyUp=(input)=>{           
        if(input.current.name==='email'){
            if(!isEmail(input.current.value.trim())) {
                setErrorFor(input,"No ingreso un email válido", smallsEmail.current)
            }else{
                setSuccessFor(input);
            }
        }        

        if(input.current.name==='password'){
            isPass(input);
        }
        if(valueMail && valuePass)
        {
            setdisableBtn(false);
        }else{
            setdisableBtn(true);
        }
        //checkInputs();
    }

    /*-----------------------------------------------------------------------------------------------------*/
    function setSuccessFor(input) {
        const formControl = input.current.parentElement;
        formControl.classList.remove("form__error");
        formControl.classList.add("form__success");       
        console.log(input.current.name);
        if(input.current.name==="email"){
            setvalueMail(true);
        }
        if(input.current.name==="password"){
            setvaluePass(true);
        }
        console.log(valueMail +" - "+valuePass);
    }
    /*-----------------------------------------------------------------------------------------------------*/
    function setErrorFor(input, message, small) {
        const formControl = input.current.parentElement;
        formControl.classList.remove("form__success");
        formControl.classList.add("form__error");
        small.innerHTML = message;        
        if(input.current.name==="email"){
            setvalueMail(false);
        }
        if(input.current.name==="password"){
            setvaluePass(false);
        }
        console.log(valueMail +" - "+valuePass);
    }
    /*-----------------------------------------------------------------------------------------------------*/
    function isEmail(email) {
        return /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email);
    }
    /*-----------------------------------------------------------------------------------------------------*/    
    function isPass(password){        
        if(password.current.value===""){
            setErrorFor(password,"Password no debe ingresar en blanco.", smallsPass.current)
        }else{            
            setSuccessFor(password);
        }
    }
    /*-----------------------------------------------------------------------------------------------------*/
    
    function checkInputs() {        
       
        const emailValue = email.current.value.trim();
        const passwordValue = password.current.value.trim();        
        if(emailValue === '') {
            setErrorFor(email, 'No puede dejar el email en blanco', smallsEmail.current);            
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'No ingreso un email válido', smallsEmail.current);        
        } else {
            setSuccessFor(email);
            valueemail=true;
        }        
        if(passwordValue === '') {
            setErrorFor(password, 'Password no debe ingresar en blanco.', smallsPass.current);           
        
        } else {
            isPass(password)
            valuepass=true;
	    } 
        
        console.log(valueemail +" - "+valuepass);

        
    }
    /*-----------------------------------------------------------------------------------------------------*/
    return (
        <>
            <Form onSubmit={handleLogin} className='form'>
                <Form.Group className="form__group" controlId="formBasicEmail">
                    <Form.Label  className='form__label' >Correo Electronico </Form.Label>                                       
                        <input
                            className='form__input' 
                            type="text"
                            name='email' 
                            placeholder="Ingresar email"
                            ref={email}
                            onChange={handleChange}
                            onKeyUp={()=> handleKeyUp(email)} 
                            onBlur={()=>habndleBlur(email)}
                            autoComplete="off"
                        />
                        <div className='form__successicon'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>                            
                        </div>
                        <div className="form__erroricon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <p ref = {smallsEmail} class="form__message"></p>                      
                </Form.Group>
                <Form.Group className="form__group" controlId="formBasicPassword">
                    <Form.Label className='form__label'>Password</Form.Label>                    
                    <input
                            className='form__input' 
                            type="password"
                            name='password' 
                            placeholder="Ingresar password"
                            ref={password}
                            onChange={handleChange}
                            onKeyUp={()=> handleKeyUp(password)} 
                            onBlur={()=>habndleBlur(password)}
                            autoComplete="off"
                        />
                        <div className="form__successicon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                        </div>
                        <div className="form__erroricon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <p ref = {smallsPass} class="form__message"></p>                      
                </Form.Group>
                <Form.Group className="d-flex justify-content-between" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recuedame" />                    
                    <Link to='RecoverPassword' onClick={()=>{setShow(false)}}>Olvide la Clave </Link>
                </Form.Group>
                {setloaderUser ?(
                    <Loader /> 
                ):(
                    <div></div>
                    ) 
                }
                <Form.Group className="mb-3 d-flex justify-content-center mt-2" controlId="formBasicButton">
                    <Button variant="primary" type="submit" controlId="btingresar" disabled={disableBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                    </svg>
                        {' '}Ingresar
                    </Button>
                </Form.Group>                    
            </Form>
        </>
    )
}

export default LoginForm