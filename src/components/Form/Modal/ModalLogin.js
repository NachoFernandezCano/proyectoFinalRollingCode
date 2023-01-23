import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Container, Tabs, Tab } from 'react-bootstrap';
import FormLogin from '../login/LoginForm'
import FormRegister from '../register/RegisterForm'
import './modallogin.css';
const ModalLogin = ({ show, setShow, handleLogin, handleRegister, setloaderUser, setloaderRegister }) => {
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} backdrop="static" centered className='modal'>
                <Modal.Header closeButton>
                    <Modal.Title className='ModalTitle'>Login/Registro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container className=" d-flex flex-column">
                        <Tabs
                            defaultActiveKey="Login"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            justify
                        >
                            <Tab eventKey="Login" title="Login">
                                <FormLogin handleLogin={handleLogin} setloaderUser={setloaderUser} setShow={setShow} />
                            </Tab>
                            <Tab eventKey="Registrar" title="Registrarse" className='login'>
                                <FormRegister setloaderRegister={setloaderRegister} handleRegister={handleRegister} />
                            </Tab>
                        </Tabs>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalLogin
