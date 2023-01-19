import React from 'react'
import "./footer.css"
import { 
  FaInstagramSquare,
  FaTwitterSquare, 
  FaFacebookSquare
} from "react-icons/fa"
import Logo from "../../components/assets/logo.png"
import qrCode from "../../components/assets/qrcode.png"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerLg'>
          <div>
            <div>
              <img src={Logo}/>
            </div>
            <div>
              <div>Nuestras redes sociales</div>
              <div><FaInstagramSquare size={25}/><a href='https://www.instagram.com/'>Instagram</a></div>
              <div><FaTwitterSquare size={25}/><a href='https://twitter.com/'>Twitter</a></div>
              <div><FaFacebookSquare size={25}/><a href='https://www.facebook.com/'>Facebook</a></div>
            </div>
            <div>
              <div>Politicas</div>
              <div><a href=''>Terminos y condiciones</a></div>
              <div><a href=''>Politicas de privacidad</a></div>
              <div><a href=''>Politicas de envio</a></div>
            </div>
            <div>

              <img src={qrCode}/>
            </div>
          </div>    
          <div>
            <p>&copy; Derechos Reservados</p>
          </div>    
        </div>

        <div className='footerMobile'>
            <div>             
              <FaInstagramSquare size={35}/>
              <FaTwitterSquare size={35}/>
              <FaFacebookSquare size={35}/>
            </div>
            <div>
              <img src={Logo} alt="Tecno"/>
            </div>
        </div>
    </div>
  )
}

export default Footer