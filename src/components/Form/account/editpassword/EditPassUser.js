import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {BsSave} from 'react-icons/bs'
import Swal from 'sweetalert2';
import Loader from '../editpassword/EditPassUser'
import './editpassword.css';



const EditPassUser = () => {
    const [loader, setloader] = useState(false);
    let navitage = useNavigate();

    const handleEditPassword = async (e) => {

        e.preventDefault();
        try {
            setloader(true);
            const paylaod = {};
            for (const target of e.target) {
                if (target.type !== 'submit') {
                    paylaod[target.name] = target.value;
                }
            }
            paylaod['token'] = window.location.hash.substr(1);
            console.log(paylaod);
            const { data } = await axios.post('http://localhost:4000/api/user/editpass', paylaod);
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
        <Container fluid='sm'>
            <Form className='formPassword' onSubmit={handleEditPassword}>
                <div className='d-flex justify-content-center mb-3'>
                    <Image src='./img/password_privacy.png' />
                </div>
                <Form.Group className="mb-4" >
                    <Form.Label className='d-flex justify-content-center' Id='titleRP'>Recuperar Clave</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3 me-1" controlId="formBasicEmail">
                    <Form.Label>Ingresar Clave Nueva</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Ingresar password" required />
                </Form.Group>
                {loader ? (
                    <Loader />
                ) : (
                    <div></div>
                )
                }
                <Form.Group className="mb-3 d-flex justify-content-around mt-2 btn-conteiner">
                    <Button className= "btnRP" type="submit">
                        <BsSave className='btnIcon'/>
                        {' '}Cambiar Clave
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default EditPassUser