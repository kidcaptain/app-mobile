import { IonButton, IonButtons,IonSearchbar, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import RoadMountainPng from './../../public/roadmountain.jpg';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div style={{paddingTop: 14}}>
          <IonButtons>
            <IonButton color="dark">
              Examens Frequents
            </IonButton>
            <IonButton>
              Examens Frequents
            </IonButton>
          </IonButtons>
          <IonSearchbar></IonSearchbar>
          <div>
            <IonGrid>
              <IonRow>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                    <IonImg src={RoadMountainPng} alt='DS' ></IonImg>
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>
                </IonCol>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                     <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>

                </IonCol>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                     <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>

                </IonCol>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                     <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>

                </IonCol>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                     <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>

                </IonCol>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                     <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>

                </IonCol>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                     <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>
                </IonCol>
                <IonCol size="4" >
                  <div style={{position: "relative"}}>
                     <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                     <div style={{position: "absolute", top: 0, left: 0, textAlign: "center", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "end", color: "white", backgroundColor: "#00000030", padding: 8, }}>
                        Text
                     </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
