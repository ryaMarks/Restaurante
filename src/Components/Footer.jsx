import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhe</span>
          <span>Comprar</span>
          <span>Depoimentos</span>
          <span>Sobre nós</span>
        </div>
        <div className="footer-section-columns">
          <span>(98)98888-8888</span>
          <span>central@modelo.com</span>
          <span>modelo1@modelo.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Rua da Felicidade, n°35, Centro, São Luís - MA</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;