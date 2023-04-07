import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import {BsFillPlayCircleFill} from 'react-icons/bs';


function About() {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>Além do prato</p>
            <h1 className='primary-heading'>A comida é uma parte muito importante da sua dieta!</h1>
            <p className='primary-text'>
            Nós do <b>Restaurante Modelo</b> sabemos a importancia de uma boa alimentação para uma vida saudável, por isso nos preocupamos com nossos pratos e sempre criamos novas receitas pensando no seu bem-estar. 
            </p>
            <p className='primary-text'>
                Veja como ajustar seu cardápio de acordo com sua dieta, e como sua alimentação influiencia no seu estilo de vida; criamos um conteúdo especial para você.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Saiba mais</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/>Ver Videos</button>
            </div>
        </div>
    </div>
  );
}

export default About;