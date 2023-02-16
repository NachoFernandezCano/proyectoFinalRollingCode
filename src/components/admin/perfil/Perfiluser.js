import {
    FaIdCardAlt, 
    FaSave,
    FaArrowAltCircleLeft     
} from "react-icons/fa"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './perfil.css'
import Loader from "../../util/loader/Loader";

const Perfiluser = () => {
    const [perfilData, setperfilData] = useState([]);
    const [loder, setloder] = useState(false);

    let navitage = useNavigate();    

    useEffect(() => {
        const token= localStorage.getItem("user");
        handleGetUserData(token);
    }, [])    

    const handleGetUserData = async(token) =>{  
        setloder(true);
        try {
            const {data} = await axios.get("http://localhost:4000/user", {headers:{Authorization: token}});            
            setperfilData(data.user);
            setloder(false);
        } catch (error) {     
            if(error.response.data.tipoerror==='tokenexp')      
            {

            }
            console.log(error);
        }
    }
    const handleGrabar = async(e) =>{
        e.preventDefault();
        const token= localStorage.getItem("user");        
        try {
            const paylaod={};
            for (const target of e.target) {
                if(target.type!== 'submit'){
                    paylaod[target.name] = target.value;
                    //target.value='';
                }
            }            
            const {data} = await axios.patch("http://localhost:4000/user/update", paylaod, {headers:{Authorization: token}});
            Swal.fire({
                title: '<strong>Leer Atte.</strong>',
                html: '<i>'+data.message+'</i>',
                icon: "success"
            })
        } catch (error) {
            Swal.fire({
                title: '<strong>Error Leer Atte.</strong>',
                html: '<i>'+error.response.data.message+'</i>',
                icon: "error"
            })
        }
    }
    const handleVolver = () =>{
        navitage("/");
    }

    return (
        <>        
            <div className='container-fluid col-8 mt-4 mb-4'>
                {
                    loder?(
                        <div className="container-loader">
                            <Loader/>
                        </div>
                    ):(
                        <Card>
                            <Card.Header>
                                <div className='container-titulo'>                            
                                    <FaIdCardAlt className="tituloimg"/>
                                    <h3 className='titulo'>Perfil de Usuario</h3>
                                </div>
                                </Card.Header>
                            <Card.Body>
                            <Form onSubmit={handleGrabar}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridNombre">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" name='nombre' placeholder="Nombre" defaultValue={perfilData?.nombre}/> 
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridApellido">
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control type="text" placeholder="apellido"  name='apellido' defaultValue={perfilData?.apellido}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="email" name='txtemail' value={perfilData?.email} />
                                    </Form.Group>
                                </Row>                        
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Calle</Form.Label>
                                    <Form.Control  type='' placeholder="San Martin" name='calle' defaultValue={perfilData.direccion?.calle}/>
                                </Form.Group>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} controlId="formGridAddress2">
                                        <Form.Label>Nro.</Form.Label>
                                        <Form.Control  type='number' placeholder="320" name='nro' defaultValue={perfilData.direccion?.nro}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridAddress2">
                                        <Form.Label>Dpto.</Form.Label>
                                        <Form.Control  type='number' placeholder='10' name='dpto' defaultValue={perfilData.direccion?.dpto}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridAddress2">
                                        <Form.Label>Barrio</Form.Label>
                                        <Form.Control  type='text' placeholder='Oeste 2' name='barrio' defaultValue={perfilData.direccion?.barrio}/>
                                    </Form.Group>                            
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Provincia</Form.Label>
                                        <Form.Control type='text' placeholder='B°. Elias Peres' name='provincia' defaultValue={perfilData.ubicacion?.provincia}/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Localidad</Form.Label>
                                        <Form.Control type='text' placeholder='B°. Elias Peres' name='localidad' defaultValue={perfilData.ubicacion?.localidad}/>                            
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Codigo Postal</Form.Label>
                                        <Form.Control type='number' placeholder='3123'  name='codigopostal' defaultValue={perfilData.ubicacion?.codigopostal}/>
                                    </Form.Group>
                                </Row>                
                                    <div className="d-flex justify-content-between">
                                        <Button variant="danger" type="submit">
                                            <FaSave/>{' '}
                                            Grabar Datos
                                        </Button>
                                        <Button variant="primary" onClick={handleVolver}>
                                            <FaArrowAltCircleLeft/>{' '}
                                            Volver
                                        </Button>
                                    </div>        
                                </Form>                        
                            </Card.Body>                    
                        </Card>                 
                    )
                }                
            </div>  
        </>
    )
}
export default Perfiluser