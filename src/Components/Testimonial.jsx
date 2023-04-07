import React from 'react';
import ProfilePic from '../Assets/john-doe-image.png';
import {AiFillStar} from 'react-icons/ai';


function Testimonial() {
  return(
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Depoimentos</p>
            <p className='primary-text'>
                Aqui estão alguns depoimentos de clientes que confiam em nosso serviço e tem qualidade garantida.
            </p>
        </div>
        <div>
            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt="" />
                <p>
                    <i>"A refeição chegou rápido e quente, tudo bem organizado e o sabor estava ótimo. Tudo perfeito, parabéns pelo serviço"</i>
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>Antônio Silva</h2>
            </div>

            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt="" />
                <p>
                    <i>"Estão de parabéns, fui muito bem recebido no local e o ambiente é muito amigável. Os atendentes são gentis e a comida estava deliciosa."</i>
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>João Carlos Perreira</h2>
            </div>

            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt="" />
                <p>
                    <i>"O restaurante tem boa localização, ambiente aconchegante e climatizado. Tem comidas típicas da região bem preparadas."</i>
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <h2>Maria Clara Fonseca</h2>
            </div>
        </div>
    </div>
  );
}

export default Testimonial;