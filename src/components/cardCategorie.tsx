import './cardCategorie.css';
import { IonCard, IonCardContent, IonButton, IonCardHeader, IonIcon, IonCardTitle, IonTitle, IonText } from '@ionic/react';

interface ContainerProps {
    text: string;
    img: string;
}

const CardCategorieComponent: React.FC<ContainerProps> = ({ text, img }) => {
    return (
        <div style={{ width: 200,  backgroundColor: "white", borderRadius: 8, overflow: "hidden", paddingBottom: 8, }}>
            <img alt="Silhouette of mountains" src={img} />
            <div style={{ backgroundColor: "white" }}>
                <div style={{ padding: 8, marginBottom: 8, fontSize: 14,  marginTop: 8, textAlign: "center", fontWeight: "bold" }} >
                    <IonText >{text}</IonText>
                </div>
                <div style={{ padding: 8 }}>
                    <IonButton expand='block' size='small' color="success" shape="round" fill='solid'> Suivre</IonButton>
                </div>
            </div>
        </div>
    );
};

export default CardCategorieComponent;
