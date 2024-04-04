
import { IonCard, IonCardContent, IonButton, IonCardHeader, IonIcon, IonCardTitle, IonTitle } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

interface ContainerProps {
    text: string;
    icon: string;
    img: string;
    titre: string;
}

const CardComponent: React.FC<ContainerProps> = ({ text, titre, img, icon }) => {
    return (
        <IonCard >
            <IonCardHeader>
                <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                    {
                        icon != "" ? (
                            <div style={{ borderRadius: '100%', overflow: "hidden", width: 35 }} >
                                <img alt="Silhouette of a person's head" width={35} src={icon} />
                            </div>
                        ) : null
                    }

                    <IonCardTitle>Card Subtitle</IonCardTitle>
                </div>
            </IonCardHeader>
            <img alt="Silhouette of mountains" src={img} />
            <IonCardContent>
                <div style={{ display: "flex", alignItems: "center", gap: 15, justifyContent: "space-between" }}>
                    <p>Here's a small text </p>
                    <IonButton className='button-rounded-full' aria-label="Favorite" size='small' shape="round" fill='solid'> <IonIcon icon={arrowForward} slot="icon-only" aria-hidden="true" color="light"></IonIcon ></IonButton>
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default CardComponent;
