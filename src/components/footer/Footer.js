import React from "react";
import "./footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import Logo from "../../assets/images/logo.jpg";
import qrCode from "../../assets/images/qrcode.png";

const Footer = () => {
  return (
      <div className="footerContainer">
        <div className="footerLg">
          <div>
            <div>
              <img src={Logo} alt="Tecno" className="logoImg" />
            </div>
            <div>
              <div>Nuestras redes sociales</div>
              <div>
                <FaInstagram className="fotterIcon" />
                <a href="https://www.instagram.com/">Instagram</a>
              </div>
              <div>
                <FaTwitter className="fotterIcon" />
                <a href="https://twitter.com/">Twitter</a>
              </div>
              <div>
                <FaFacebookF className="fotterIcon" />
                <a href="https://www.facebook.com/">Facebook</a>
              </div>
            </div>
            <div>
              <div>Políticas</div>
              <div>
                <a href="./Error404">- Términos y condiciones</a>
              </div>
              <div>
                <a href="./Error404">- Políticas de privacidad</a>
              </div>
              <div>
                <a href="./Error404">- Políticas de envío</a>
              </div>
            </div>
            <div>
              <div>Contacto</div>
              <div>
                <a href="./Error404">- Trabaja con nosotros</a>
              </div>
              <div>
                <a href="./Error404">- Envianos un mensaje</a>
              </div>
              <div>
                <a href="./Error404">- Reporta un bug</a>
              </div>
            </div>
            <div>
              <img alt="" src={qrCode} />
            </div>
          </div>
          <div>
            <p>Quantum Tecno&copy; Derechos Reservados</p>
          </div>
        </div>

        <div className="footerMobile">
          <div>
            <FaInstagram size={35} />
            <FaTwitter size={35} />
            <FaFacebookF size={35} />
          </div>
          <div>
            <img src={Logo} alt="Tecno" />
          </div>
        </div>
      </div>
  );
};

export default Footer;
