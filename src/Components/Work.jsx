import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Para você",
      text: "Estamos te esperando com um abiente preparado e profissionais qualificados para te receber.",
    },
    {
      image: ChooseMeals,
      title: "Você escolhe",
      text: "Aqui você pode montar seu prato, e nós te damos várias dicas para te ajudar a escolher.",
    },
    {
      image: DeliveryMeals,
      title: "Entregas Rapidas",
      text: "Sabemos que não é legal esperar com fome, por isso trabalhamos para lhe entregar sua comida ainda quentinha.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trabalho</p>
        <h1 className="primary-heading">Nosso trabalho</h1>
        <p className="primary-text">
          Veja aqui um pouco do nosso trabalho, os serviços que ofereçemos e como podemos te atender da melhor forma. Fique a vontade :)
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;