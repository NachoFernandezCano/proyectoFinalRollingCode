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
import { React, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import ModalLogin from "../Form/Modal/ModalLogin";
import Menu from "../Util/menu/Menu";

const Header = () => {
  const [modalLogin, setmodalLogin] = useState(false);
  const [loginUser, setloginUser] = useState(false);
  const [loaderUser, setloaderUser] = useState(false);
  const [loaderRegister, setloaderRegister] = useState(false);
  const [userName, setuserName] = useState('');
  const [userType, setuserType] = useState(false) 
  const [productCount, setproductCount] = useState(0)

  let navitage = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      handleVerifyJwt(token);      
    } else {
      navitage("/");
    }
  }, [navitage]);


  const handleVerifyJwt = async(token)=>{
    try {
      const {data} = await axios.get("http://localhost:4000/user", {headers:{Authorization: token}});       
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
          localStorage.clear("user");
          setloginUser(false);
          navitage("/");           
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
      localStorage.setItem("user",data.token);
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
      console.log(error)     ;
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
        localStorage.clear("user");
        setloginUser(false);
        navitage("/");      
        setloginUser(false); 
        setproductCount(0);
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
      const { data } = await axios.post('http://localhost:4000/user/register', paylaod);
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

  const handlePerfil = () =>{
    navitage("Perfil");
  }

  const handleLoadCart= async () => {
    try {
      const token = localStorage.getItem('user');
      const cartCount = await axios.get("http://localhost:4000/cart/getCart", {headers:{Authorization: token}});      
      setproductCount(cartCount.data.cart.length);            
    } catch (error) {
      alert(error);
    }
  }

  const autoLogin = (user)=>{
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

  return (
    <>
      <div className='Header_container'>
        <div>
          <div>
            <div className="logo"></div>
            <div>
              <input placeholder="Buscar producto" className="ps-3" />
              <div id="schIconContainer">
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
                <div className="userMenu">                 
                  <NavDropdown title={userName} id='navbarUsuario' bg='light'>
                    <NavDropdown.Item href="#" onClick={ () => handlePerfil() }>Perfil</NavDropdown.Item>    
                    <NavDropdown.Item href="#" onClick={() => handleLogout()}>Cerrar Sesion</NavDropdown.Item>
                  </NavDropdown>
              </div>
              ) : (
                <Nav.Link className='userName' id='userLogin' onClick={() => setmodalLogin(true)}>Login/Registrarse</Nav.Link>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link to='/'><FaHome className='mainIcons needHoover' /></Link>
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
              CONTACTANOS
              <FaPhone className='headerIcons' />
            </div>
          </div>
          <div>
            <FaShoppingCart className='mainIcons needHoover' />
            { productCount !== 0 ? (<div className="productsNumber needHoover">{productCount}</div> )
            :(
              (<></>)
              ) }
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
                    <input placeholder="Buscar producto" className="ps-1" />
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

      {
        userType?(
            <Menu/>
        ):(<></>)
      }

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
