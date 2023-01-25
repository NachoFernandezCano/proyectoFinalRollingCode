import { 
  FaInstagramSquare,
  FaTwitterSquare, 
  FaFacebookSquare,
  FaSearch,
  FaHome,
  FaRegStar,
  FaRegHeart,
  FaPhone,
  FaShoppingCart,
  FaRegQuestionCircle
} from "react-icons/fa"
import "./header.css"
import { React, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ModalLogin from "../../components/Form/Modal/ModalLogin";
import Menu from './../../components/util/menu/Menu'


const Header = () => {
    const [modalLogin, setmodalLogin] = useState(false);
    const [loginUser, setloginUser] = useState(false);

    const [loaderUser, setloaderUser] = useState(false);
    const [loaderRegister, setloaderRegister] = useState(false);
    const [userName, setuserName] = useState('');
    const [userType, setuserType] = useState(false)       
    
    let navitage = useNavigate();    
    

    const handleIngresar = async (e) =>{
        e.preventDefault();       
        try {
            const paylaod={};
            for (const target of e.target) {
                if(target.type!== 'submit'){
                    paylaod[target.name] = target.value;                    
                }
            }                     
            const {data} = await axios.post('http://localhost:4000/api/user/auth', paylaod);  
            console.log(data);
            setuserName(data.dataUser.nombre);            
            localStorage.setItem("user",data.token);
            if(data.dataUser.type==='admin'){
              setuserType(true);
            }else{
              setuserType(false);
            }
            setloaderUser(true);
            setloginUser(true);        
            setmodalLogin(false);    
            
        } catch (error) {     
            if(error.code==="ERR_NETWORK"){
                return  Swal.fire({
                    title: '<strong>Error de Conexion Leer Atte.</strong>',
                    html: '<i>No se puede conectar con el Servidor de Datos, Favor de Comunicar al Administrador del Sistema!!!</i>',
                    icon: "error"
                })
            }                
            Swal.fire({
                title: '<strong>Error Login</strong>',
                html: '<i>'+error.response.data.message+'</i>',
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
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Cerrar'
    }).then((result) => {
        if (result.isConfirmed) {
            
            setloaderUser(false);
            setloaderRegister(false);
            setmodalLogin(false);
            setuserType(false);
            localStorage.clear("user");
            navitage("/");
            console.log(loginUser);
        }
    })
    }
  
  const handleRegister = async(e) =>{
    e.preventDefault();
    setloaderRegister(true)
    try {
        const paylaod={};
        for (const target of e.target) {
            if(target.type!== 'submit'){
                paylaod[target.name] = target.value;
                //target.value='';
            }
        }         
        paylaod["type"] = "user";      
        const {data} = await axios.post('http://localhost:4000/api/user/register', paylaod);        
        Swal.fire({
            title: '<strong>Resgistro de Usuarios</strong>',
            html: '<i>'+data.message+'</i>',
            icon: data.tipoerror
        })
        for (const target of e.target) {
            if(target.type!== 'submit'){                
                target.value='';
            }
        }   
    } catch (error) {
        console.log(error.response.data);
        Swal.fire({
            title: '<strong>Error Resgistro de Usuarios</strong>',
            html: '<i>'+error.response.data.message+'</i>',
            icon: error.response.data.tipoerror
        })
    }
    setloaderRegister(false);
  }
  const handlePerfil = () =>{
    navitage("/Perfil");
  }
  return (
    <>
      <div className='Header_container'>
        <div>
          <div>     
            <h1>MARCA</h1>           
            <div>
              <input placeholder="Buscar producto"/>
              <div className="buscar">
                <FaSearch/>
              </div>  
            </div>    
            <div>
              <FaInstagramSquare size={40} style={{fill: "white"}}/>
              <FaTwitterSquare size={40} style={{fill: "white"}}/>
              <FaFacebookSquare size={40} style={{fill: "white"}}/>
            </div>
            
            {loginUser ?
              (   
                <div className="userMenu">                               
                  <NavDropdown title={userName} id="navbarUsuario"  bg='light'>                                
                      <NavDropdown.Item href="#" onClick={()=>(handlePerfil())}>Perfil</NavDropdown.Item>                                       
                      <NavDropdown.Item href="#" onClick={()=> handleLogout()}>
                          Cerrar Sesion
                      </NavDropdown.Item>
                  </NavDropdown>                                                    
                </div>                                                                                 
              ):(
                <Nav.Link  className='userName'  id='userLogin' onClick={()=>setmodalLogin(true)}>Login/Register</Nav.Link>
              )
            }          
            
          </div>          
        </div>      
        <div>
          <div className="needHoover">
            <FaHome size={30} style={{fill: "white"}}/>
          </div>
          <div>
            <div className="needHoover">
              DESTACADOS
              <div>
                <FaRegStar/>
              </div>
            </div>
            <div className="needHoover">
              FAVORITOS
              <div>
                <FaRegHeart/>
              </div>
            </div>
            <div className="needHoover">
              CONTACTANOS
              <div>
                <FaPhone/>
              </div>
            </div>
          </div>
          <div className="needHoover" >
            <FaShoppingCart size={25} style={{fill: "white"}}/>
            <div>
              0
            </div>
          </div>
          <div className="needHoover">
            <FaRegQuestionCircle size={25} style={{fill: "white"}}/>
          </div>
        </div>                 
      </div>    

      <div className="navbarMobile">
        <Navbar variant="dark" expand="lg" >
          <Container className="navbarMobile">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Destacados</Nav.Link>
                <Nav.Link href="#link">Contactanos</Nav.Link>
                <Nav.Item>
                  <div>
                    <input placeholder="Buscar producto"/>
                  </div>    
                </Nav.Item>
              </Nav>             
            </Navbar.Collapse>
            <Nav>
            {loginUser ?(   
                          <>                                
                            <NavDropdown title={userName} id="navbarUsuario" className='userMenu' bg='light'>                                
                                <NavDropdown.Item href="#action3">Perfil</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={()=> handleLogout()}>
                                    Cerrar Sesion
                                </NavDropdown.Item>
                            </NavDropdown>                                                    
                          </>                                                                                 
                        ):(
                            <Nav.Link  className='userName'  id='userLogin' onClick={()=>setmodalLogin(true)}>Login/Register</Nav.Link>
                        )}                        
            </Nav>            
          </Container>
        </Navbar>
      </div>
      {
        userType?(
            <Menu />
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