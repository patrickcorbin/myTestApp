import React, { useState, useRef } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButtons, IonItem, IonLabel, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { OverlayEventDetail } from '@ionic/core/components';
import './Tab1.css';

// const Tab1: React.FC = () => {
  
function Tab1() {

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (

    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding container" fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonContent>
          <img className="logo" src="assets/BF_logo.png" alt="Birdfoot logo" />
          <IonButton id="open-modal" expand="block">
            Open
          </IonButton>
          <ExploreContainer name="Home" />
          <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                </IonButtons>
                <IonTitle>Welcome</IonTitle>
                <IonButtons slot="end">
                  <IonButton strong={true} onClick={() => confirm()}>
                    Confirm
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonItem>
                <IonLabel position="stacked">Enter your name</IonLabel>
                <IonInput ref={input} type="text" placeholder="Your name" />
              </IonItem>
            </IonContent>
          </IonModal>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
