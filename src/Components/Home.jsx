import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';

function Home() {
  return(
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} alt="" />
        </div>
        <div classNasme='home-text-section'>
          <h1 className='primary-heading'>
              Sua comida favorita entregue rápido e quente!!
          </h1>
          <p className='primary-text'>
              Aqui voce tem o controle, personalize suas refeições e reçeba em casa uma refeição de qualidade. Na nossa loja física você pode conferir a qualidade da comida e ter um atendimento especial.
          </p>
          <button className='secondary-button'>
            Pedir Agora
          </button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;