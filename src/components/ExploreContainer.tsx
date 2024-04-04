import './ExploreContainer.css';
import CardComponent from './card';

import { Swiper, SwiperSlide } from 'swiper/react';

import SolarPng from './../../public/solar system 286d141c-11c2-4335-bc29-fc9b710327ae (1).png';
import RoadMountainPng from './../../public/roadmountain.jpg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import { IonAvatar, IonButton, IonIcon, IonLabel, IonText, IonicSlides } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import CardCategorieComponent from './cardCategorie';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const tabCardContent = [
    {
      text: "SANLAM ASSURANCES",
      icon: SolarPng,
      img: SolarPng,
      titre: "Mon médecin de famille",
    },
    {
      text: "SANLAM ASSURANCES",
      icon: SolarPng,
      img: SolarPng,
      titre: "Mon médecin de famille",
    },
    {
      text: "SANLAM ASSURANCES",
      icon: SolarPng,
      img: SolarPng,
      titre: "Mon médecin de famille",
    }
  ]
  const tabCardCategorieContent = [
    {
      text: "Cardio",
      img: SolarPng,
    },
    {
      text: "Se muscler",
      img: SolarPng,
    },
    {
      text: "Se muscler",
      img: SolarPng,
    },
    {
      text: "Se muscler",
      img: SolarPng,
    },
    {
      text: "Se muscler",
      img: SolarPng,
    }
  ]
  return (
    <div className="container" style={{ backgroundImage: `url('${RoadMountainPng}')` }} >
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "black", opacity: "0.5" }}>

      </div>
      <div style={{ position: "relative" }}>
        <Swiper
          spaceBetween={5}
          slidesPerView={1}

        >
          {
            tabCardContent.map((i, index: number) => (
              <SwiperSlide style={{width: 300}} key={index}> <CardComponent  text={i.text} icon={i.icon} img={i.img} titre={i.titre} /></SwiperSlide>
            ))
          }
        </Swiper>
        <div style={{ padding: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <IonAvatar slot="start">
              <img alt="Silhouette of a person's head" src={SolarPng} />
            </IonAvatar>
            <div>
              <IonLabel><span style={{ fontWeight: "bolder", color: 'white' }}>Titre</span> </IonLabel>  <br />
              <IonText color="light">sous titre</IonText>
            </div>
          </div>
          <IonButton className='button-rounded-full' aria-label="Favorite" size='small' shape="round" fill='solid'> <IonIcon icon={arrowForward} slot="icon-only" aria-hidden="true" color="light"></IonIcon ></IonButton>
        </div>
        <div style={{ padding: 10 }}>

          <Swiper  
          spaceBetween={20}
          slidesPerView={3}>
            {
              tabCardCategorieContent.map((i, index: number) => (
                <SwiperSlide key={index}>  <CardCategorieComponent text={i.text} img={i.img}  ></CardCategorieComponent></SwiperSlide>
              ))
            }
          </Swiper>

        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
