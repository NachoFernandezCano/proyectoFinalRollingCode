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
  FaRegQuestionCircle,
} from 'react-icons/fa';
import './header.css';
import { React, useEffect, useState } from 'react';
import { useCartContext } from "../../context/cartContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import ModalLogin from '../form/Modal/ModalLogin';
import Logo from '../../assets/images/logo.jpg';
import Menu from '../util/menu/Menu';

const Header = ({productQuantity}) => {
  const [modalLogin, setmodalLogin] = useState(false);
  const [loginUser, setloginUser] = useState(false);
  const [loaderUser, setloaderUser] = useState(false);
  const [loaderRegister, setloaderRegister] = useState(false);
  const [userName, setuserName] = useState('');
  const [userType, setuserType] = useState(false);
  const [productCount, setproductCount] = useState(10);
  const { cartCount, getCartCount } = useCartContext();

  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      handleVerifyJwt(token);
    } else {
      //navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    setproductCount(cartCount);
  }, [cartCount]);

  const handleVerifyJwt = async (token) => {
    try {
      const { data } = await axios.get("http://localhost:4000/user", { headers: { Authorization: token } });
      autoLogin(data.user);
    } catch (error) {
      Swal.fire({
        title: 'Leer. Atte.',
        text: error.response.data.message,
        icon: error.response.data.icon,
        showCancelButton: false,
        confirmButtonColor: '#e31474',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          setloaderUser(false);
          setloaderRegister(false);
          setmodalLogin(false);
          setuserType(false);
          localStorage.clear('user');
          setloginUser(false);
          navigate('/');
          setloginUser(false);
          setproductCount(0);
        }
      })
    }
  }

  const handleIngresar = async (e) => {
    e.preventDefault();
    try {
      const paylaod = {};
      for (const target of e.target) {
        if (target.type !== 'submit') {
          paylaod[target.name] = target.value;
        }
      }
      const { data } = await axios.post('http://localhost:4000/user/auth', paylaod);
      setuserName(data.dataUser.nombre);
      localStorage.setItem('user', data.token);
      handleLoadCart();
      if (data.dataUser.type === 'admin') {
        setuserType(true);
      } else {
        setuserType(false);
      }
      setloaderUser(true);
      setloginUser(true);
      setmodalLogin(false);
    } catch (error) {
      if (error.code == "ERR_NETWORK") {
        return Swal.fire({
          title: '<strong>Error de Conexión</strong>',
          html: '<i>No se puede conectar con el Servidor de Datos. Por favor intente de nuevo más tarde.</i>',
          icon: 'error'
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
    Swal.fire({
      title: 'Administracion Usuario',
      text: 'Esta seguro que deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e31474',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar'
    }).then((result) => {
      if (result.isConfirmed) {
        setloaderUser(false);
        setloaderRegister(false);
        localStorage.clear('user');
        setloginUser(false);
        setuserType(false);
        navigate('/');
        setloginUser(false);
        setproductCount(0);
      }
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setloaderRegister(true);
    try {
      const paylaod = {};
      const direccion = {
        calle: e.target["direccion[calle]"].value,
        nro: e.target["direccion[nro]"].value,
        dpto: e.target["direccion[dpto]"].value,
        provincia: e.target["direccion[provincia]"].value,
        localidad: e.target["direccion[localidad]"].value,
        codigopostal: e.target["direccion[codigopostal]"].value,
      };
      paylaod["direccion"] = direccion;
      for (const target of e.target) {
        if (target.type !== 'submit') {
          paylaod[target.name] = target.value;
        }
      }
      paylaod["type"] = "user";
      const { data } = await axios.post('http://localhost:4000/user/register', paylaod);
      Swal.fire({
        title: '<strong>Resgistro de Usuarios</strong>',
        html: '<i>' + data.message + '</i>',
        icon: data.tipoerror
      });
      for (const target of e.target) {
        if (target.type !== 'submit') {
          target.value = '';
        }
      }
    } catch (error) {
      Swal.fire({
        title: '<strong>Error Resgistro de Usuarios</strong>',
        html: '<i>' + error.response.data.message + '</i>',
        icon: error.response.data.tipoerror
      });
    }
    setloaderRegister(false);
  };
  const handlePerfil = () => {
    navigate("Perfil");
  }
  const handleLoadCart = () => {
    getCartCount();
  }
  const autoLogin = (user) => {
    setuserName(user.nombre);
    handleLoadCart();
    if (user.type === 'admin') {
      setuserType(true);
    } else {
      setuserType(false);
    }
    setloaderUser(true);
    setloginUser(true);
    setmodalLogin(false);
  }
  const handleComprar = () => {
    navigate('Comprar');
  }

  return (
    <>
      <div className='Header_container'>
        <div>
          <div>
            <Link to='/'><div className='logo'></div></Link>
            <div>
              <input placeholder='Buscar producto' className='ps-3' />
              <div id='schIconContainer'>
                <FaSearch className='searchIcon' />
              </div>
            </div>
            <div>
              <FaInstagram className='socialIcons' />
              <FaTwitter className='socialIcons' />
              <FaFacebookF className='socialIcons' />
            </div>
            <div>
              {loginUser ? (
                userType ? (
                  <>
                    <div className='userMenu'>
                      <NavDropdown title={userName} id='navbarUsuario' bg='light'>
                        <NavDropdown.Item href='#' onClick={() => handlePerfil()}>Perfil</NavDropdown.Item>
                        <NavDropdown.Item href='/Table' onClick={() => handlePerfil()}>Tabla de productos</NavDropdown.Item>
                        <NavDropdown.Item href='#' onClick={() => handleLogout()}>Cerrar Sesión</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='userMenu'>
                      <NavDropdown title={userName} id='navbarUsuario' bg='light'>
                        <NavDropdown.Item href='#' onClick={() => handlePerfil()}>Perfil</NavDropdown.Item>
                        <NavDropdown.Item href='#' onClick={() => handleLogout()}>Cerrar Sesión</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </>
                )
              ) : (
                <Nav.Link className='userName' id='userLogin' onClick={() => setmodalLogin(true)}>Iniciar Sesión</Nav.Link>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <Nav.Link href='/'>
              <FaHome className='mainIcons needHoover' />
            </Nav.Link>
          </div>
          <div>
            <div className='needHoover'>
              <Link to='/hotItems'>
                DESTACADOS
                <FaRegStar className='headerIcons' />
              </Link>
            </div>
            <div className='needHoover'>
              FAVORITOS
              <FaRegHeart className='headerIcons' />
            </div>
            <div className='needHoover'>
              <Link to='/Error404'>
                CONTACTANOS
                <FaPhone className='headerIcons' />
              </Link>
            </div>
          </div>
          <div onClick={() => handleComprar()} className='needHoover'>
            <FaShoppingCart className='headerIcons' />
{/*             {productCount !== 0 ? (<div className='productsNumber'>{productCount}</div>)
              : (
                (<></>)
              )} */}
              {productQuantity}
          </div>
          <Link className='needHoover' to='/Error404'>
            <FaRegQuestionCircle className='mainIcons needHoover'/>
          </Link>
        </div>
      </div>

      <div className='navbarMobile'>
        <Navbar variant='dark' expand='lg' className='navbarContainer'>
          <Container className='navbarMobile'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='hNavToggle' />
            <Nav>
              {loginUser ? (
                userType ? (
                  <>
                    <div className="userMenu">
                      <NavDropdown title={userName} id='navbarUsuario' bg='light'>
                        <NavDropdown.Item href='#' onClick={() => handlePerfil()}>Perfil</NavDropdown.Item>
                        <NavDropdown.Item href='/Table' onClick={() => handlePerfil()}>Tabla de productos</NavDropdown.Item>
                        <NavDropdown.Item href='#' onClick={() => handleLogout()}>Cerrar Sesión</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </>
                ) : (
                  <>
                    <div className='userMenu'>
                      <NavDropdown title={userName} id='navbarUsuario' bg='light'>
                        <NavDropdown.Item href="#" onClick={() => handlePerfil()}>Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={() => handleLogout()}>Cerrar Sesión</NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </>
                )
              ) : (
                <Nav.Link className='userName' id='userLogin' onClick={() => setmodalLogin(true)}>Iniciar Sesión</Nav.Link>
              )}
            </Nav>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/hotItems'>Destacados</Nav.Link>
                <Nav.Link href='/Error404'>Contactanos</Nav.Link>
                <Nav.Item>
                  <div>
                    <input placeholder='Buscar producto' className='ps-1' />
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
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
