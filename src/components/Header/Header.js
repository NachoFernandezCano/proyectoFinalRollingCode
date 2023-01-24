import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaSearch,
  FaHome,
  FaRegStar,
  FaRegHeart,
  FaPhone,
  FaShoppingCart,
  FaRegQuestionCircle
} from "react-icons/fa"
import "./header.css"
import { React, useState } from 'react'
import { Button, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalLogin from "../Form/Modal/ModalLogin";
// import logo from "../../Assets/images/logo.jpg"

const Header = () => {
  const [modalLogin, setmodalLogin] = useState(false);
  const [loginUser, setloginUser] = useState(false);
  const [loaderUser, setloaderUser] = useState(false);
  const [loaderRegister, setloaderRegister] = useState(false);
  const [userName, setuserName] = useState('');

  let navitage = useNavigate();

  const handleIngresar = async (e) => {
    e.preventDefault();
    try {
      const paylaod = {};
      for (const target of e.target) {
        if (target.type !== 'submit') {
          paylaod[target.name] = target.value;
        }
      }
      const { data } = await axios.post('http://localhost:4000/api/user/auth', paylaod);
      setuserName(data.dataUser.name);
      alert(data.dataUser.type);
      if (data.dataUser.type === 'admin') {
        navitage("/Admin");
      } else {
      }
      setloaderUser(true);
      setloginUser(true);
      setmodalLogin(false);

    } catch (error) {
      if (error.code == "ERR_NETWORK") {
        return Swal.fire({
          title: '<strong>Error de Conexión</strong>',
          html: '<i>No se puede conectar con el Servidor de Datos. Por favor intente de nuevo más tarde.</i>',
          icon: "error"
        })
      }
      Swal.fire({
        title: '<strong>Error Login</strong>',
        html: '<i>' + error.response.data.message + '</i>',
        icon: error.response.data.tipoerror
      })
    }
  }

  const handleLogout = () => {
    setloginUser(false);
    Swal.fire({
      title: 'Administracion Usuario',
      text: "Deseas Cerrar Sesion?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e31474',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar'
    }).then((result) => {
      if (result.isConfirmed) {

        setloaderUser(false);
        setloaderRegister(false);
        setmodalLogin(false);
        console.log(loginUser);
      }
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setloaderRegister(true)
    try {
      const paylaod = {};
      for (const target of e.target) {
        if (target.type !== 'submit') {
          paylaod[target.name] = target.value;
        }
      }
      paylaod["type"] = "user";
      const { data } = await axios.post('http://localhost:4000/api/user/register', paylaod);
      Swal.fire({
        title: '<strong>Resgistro de Usuarios</strong>',
        html: '<i>' + data.message + '</i>',
        icon: data.tipoerror
      })
      for (const target of e.target) {
        if (target.type !== 'submit') {
          target.value = '';
        }
      }
    } catch (error) {
      console.log(error.response.data);
      Swal.fire({
        title: '<strong>Error Resgistro de Usuarios</strong>',
        html: '<i>' + error.response.data.message + '</i>',
        icon: error.response.data.tipoerror
      })
    }
    setloaderRegister(false);
  }

  return (
    <>
      <div className='Header_container'>
        <div>
          <div>
            <div className="logo"></div>
            <div>
              <input placeholder="Buscar producto" className="ps-3" />
              <div id="schIconContainer">
                <FaSearch className='searchIcon'/>
              </div>
            </div>
            <div>
              <FaInstagram className='socialIcons' />
              <FaTwitter className='socialIcons' />
              <FaFacebookF className='socialIcons' />
            </div>
            <div>
              {loginUser ? (
                <>
                  <Nav.Link href="#action1" className='btnCard'>
                    <FaShoppingCart className='headerIcons'/>
                  </Nav.Link>
                  <NavDropdown title={userName} id='navbarUsuario' className='userMenu' bg='light'>
                    <NavDropdown.Item href="#action3">Perfil</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={() => handleLogout()}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link className='userName' id='userLogin' onClick={() => setmodalLogin(true)}>Login/Registrarse</Nav.Link>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <FaHome className='mainIcons needHoover' />
          </div>
          <div>
            <div className='needHoover'>
              DESTACADOS
              <FaRegStar className='headerIcons' />
            </div>
            <div className='needHoover'>
              FAVORITOS
              <FaRegHeart className='headerIcons' />
            </div>
            <div className='needHoover'>
              CONTACTANOS
              <FaPhone className='headerIcons' />
            </div>
          </div>
          <div>
            <FaShoppingCart className='mainIcons needHoover' />
            0
          </div>
          <div className='needHoover'>
            <FaRegQuestionCircle className='mainIcons needHoover' />
          </div>
        </div>
      </div>

      <div className='navbarMobile'>
        <Navbar variant="dark" expand="lg" >
          <Container className='navbarMobile'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Destacados</Nav.Link>
                <Nav.Link href="#link">Contactanos</Nav.Link>
                <Nav.Item>
                  <div>
                    <input placeholder="Buscar producto" className="ps-1"/>
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            <Nav>
              {loginUser ? (
                <>
                  <Nav.Link href="#action1" className='btnCard'>
                    <FaShoppingCart className='cart-icon fav-icon' />
                  </Nav.Link>
                  <NavDropdown title={userName} id='navbarUsuario' className='userMenu' bg='light'>
                    <NavDropdown.Item href="#action3">Perfil</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#" onClick={() => handleLogout()}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link className='userName' id='userLogin' onClick={() => setmodalLogin(true)}>Login/Register</Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>

      <ModalLogin
        show={modalLogin}
        setShow={setmodalLogin}
        handleLogin={handleIngresar}
        handleRegister={handleRegister}
        setloaderUser={loaderUser}
        setloaderRegister={loaderRegister}
      />
    </>
  )
}

export default Header
