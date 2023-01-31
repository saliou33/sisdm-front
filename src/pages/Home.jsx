import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Brand from '../components/Brand';
import SquaredStar from '../assets/images/square-stars-w.svg';
import HeroImage from '../assets/images/hero-image.png';
import CircleWave from '../assets/images/circle-waves.svg';
import FirstFeature from '../assets/images/features1.jpg';
import SecondFeature from '../assets/images/features2.jpg';
import Stars from '../assets/images/square-stars.svg';

const Home = () => {

  return (
    <>
      <Header/>
      <section class="main-bg min-h-[700px] p-20">
        <div class="flex flex-wrap items-center justify-around gap-32 in-content">
          <div class="relative flex flex-col items-center text-center">
            <p class="mb-4 font-bold text-7xl">SISDM</p>
            <img src={SquaredStar} class="absolute -top-20 -left-52"/>
            <p class="mb-14 text-4xl font-bold text-neutral1  max-w-[30rem]">Une Solution en ligne pour vos besoins médicaux</p>

            <div>
              <Button text="Rejoignez Nous" shadow="lg" hover="bg-neutral2"/>
            </div>
          </div>

          <div class="max-h-[595px] max-w-[630px]">
            <img src={HeroImage} alt="Hero Image" class="w-full h-auto "/>
          </div>
        </div>
      </section>

      <section class="mb-32 in-content" >
        <h3 class="m-16 text-4xl font-bold text-center text-primary5">Pourquoi nous choisir?</h3>
        <div class="flex flex-col gap-4 lg:gap-8">
          <div class="flex flex-wrap-reverse justify-center gap-8 lg:gap-32">
            <div class="relative">
              <img src={CircleWave} class="absolute -top-20 -left-44 -z-10"/>
              <img src={FirstFeature} alt="A doctor" class="w-[500px] h-[550px] object-cover"/>
            </div>

            <div class="flex-col max-w-[450px] items-center break-words text-center">

              <h4 class="mt-10 mb-2 text-2xl font-bold text-primary5">Nos Experts</h4>

              <p class="text-xl">
                Les experts médicaux proposés par notre Homelication de consultation en ligne sont tous des professionnels expérimentés et qualifiés dans leur domaine de spécialisation. Ils sont disponibles pour répondre à vos questions et vous offrir des conseils de qualité en temps réel.
              </p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-8 lg:gap-32">

          <div class="flex-col max-w-[450px] items-center break-words text-center relative">
            <h4 class="mt-10 mb-2 text-2xl font-bold text-primary5">Homelications</h4>

            <p class="text-xl">
              Notre Homelication de consultation en ligne offre une expérience de consultation de qualité grâce à notre panel d'experts médicaux qualifiés et expérimentés. Nous avons également mis en place un système de gestion de dossiers médicaux sécurisé pour garantir la confidentialité de vos informations médicales. Toutes les données sont stockées de manière sécurisée et cryptée, et uniquement accessibles aux experts médicaux autorisés. Vous pouvez accéder à votre dossier médical en toute sécurité à tout moment grâce à notre interface simple et intuitive.
            </p>
          </div>
          <div class="relative">
            <img src={Stars} class="absolute -right-48 -top-20 -z-10"/>
            <img src={SecondFeature} alt="A user" class="w-[500px] h-[550px] object-cover"/>
          </div>
        </div>
      </div>
      </section>

      <footer class="bg-primary7" >
        <div class="flex justify-between min-h-[60vh] p-[3rem] in-content">
          <Brand/>
          <div>
            <h3 class="text-xl text-yellow3">FAQS</h3>
          </div>
          <div>
            <h3 class="text-xl text-yellow3">SiteMap</h3>
          </div>
          <div>
            <h3 class="text-xl text-yellow3">Contacter Nous</h3>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
