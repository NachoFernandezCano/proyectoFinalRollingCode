import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Image} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../../Util/loader/Loader';
import './recoveri.css';

const RecoverPassword = () => {
    const [loader, setloader] = useState(false);
    let navitage = useNavigate();

    const handleEmail = async(e) =>{        
        try {
            e.preventDefault();
            setloader(true);
            const paylaod={};
            for (const target of e.target) {
                if(target.type!== 'submit'){
                    paylaod[target.name] = target.value;                    
                }
            }                     
            const {data} = await axios.post('http://localhost:4000/api/user/recovery', paylaod);  
            Swal.fire({
                title: '<strong>Recuperar Clave</strong>',
                text: data.message,
                icon: data.tipoerror,
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    navitage("/");
                    setloader(false);
                }
            })                             
            
        } catch (error) {
            Swal.fire({
                title: '<strong>Error Login</strong>',
                html: '<i>'+error.response.data.message+'</i>',
                icon: error.response.data.tipoerror
            })
            setloader(false);
        }
        
    }
    return (
        <>
        <div className='container-form'>
            <Form className='formRecupero' onSubmit={handleEmail}>
                <div className='d-flex justify-content-center mb-3'>
                    <Image src='./img/user_icon.png'/>
                </div>
                <Form.Group className="mb-4" >
                    <Form.Label className=' d-flex justify-content-center titulo'>Recuperar Clave</Form.Label>                    
                </Form.Group>                 
                <Form.Group className="mb-3 me-1" controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Ingresar email" required/>                    
                </Form.Group>
                { loader ?(
                        <Loader />                     
                    ):(                    
                        <div></div>
                    ) 
                }                 
                <Form.Group className="mb-3 d-flex justify-content-around mt-2 btn-conteiner">
                    <Button variant="primary" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                        <path d="M3 6l9 6l9 -6" />
                        <path d="M15 18h6" />
                        <path d="M18 15l3 3l-3 3" />
                    </svg>
                        {' '}Enviar Email
                    </Button>
                    <Button variant="success" onClick={()=>{ navitage("/") }}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backspace" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
                        <path d="M12 10l4 4m0 -4l-4 4" />
                    </svg>
                        {' '}Volver
                    </Button>
                </Form.Group>                    
            </Form>
        </div>
        </>
    )
}
export default RecoverPassword