import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { BiMailSend } from 'react-icons/bi'
import { BsBackspace } from 'react-icons/bs'
import Swal from 'sweetalert2';
import Loader from '../../util/loader/Loader';
import './recoveri.css';
import image from "../../../assets/images/user_icon.png"

const RecoverPassword = () => {
    const [loader, setloader] = useState(false);
    let navitage = useNavigate();

    const handleEmail = async (e) => {
        try {
            e.preventDefault();
            setloader(true);
            const paylaod = {};
            for (const target of e.target) {
                if (target.type !== 'submit') {
                    paylaod[target.name] = target.value;
                }
            }
            const { data } = await axios.post('http://localhost:4000/api/user/recovery', paylaod);
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
                html: '<i>' + error.response.data.message + '</i>',
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
                        <Image src={image} />
                    </div>
                    <Form.Group className="mb-4" >
                        <Form.Label className=' d-flex justify-content-center' id='titleRP'>Recuperar Clave</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3 me-1 textRP" controlId="formBasicEmail">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Ingresar email" required />
                    </Form.Group>
                    {loader ? (
                        <Loader />
                    ) : (
                        <div></div>
                    )
                    }
                    <Form.Group className="mb-3 d-flex justify-content-around mt-2 btn-conteiner">
                        <Button className='btnRP' type="submit">
                            <BiMailSend className='btnIcon' />
                            {' '}Enviar Email
                        </Button>
                        <Button className='btnRP' onClick={() => { navitage("/") }}>
                            <BsBackspace className='btnIcon' />
                            {' '}Volver
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
export default RecoverPassword