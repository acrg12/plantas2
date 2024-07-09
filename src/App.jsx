import React, { useEffect } from 'react';
import { PrimeReactProvider } from "primereact/api";
import Routing from './router/Routing';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'http://181.204.95.204:8080/datasnap/rest/TServerMethods/alarmaCaracteristica/44';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();

        if (!data || !data.alarma || data.alarma.length === 0) {
          console.error('No se encontraron datos válidos en la respuesta de la API');
          return;
        }

        const firstAlarm = data.alarma[0];

        if (!firstAlarm.valorMuestra || !firstAlarm.nivelAlerta || !firstAlarm.fecha_hora_alarma) {
          console.error('valorMuestra, nivelAlerta o fecha_hora_alarma no se encuentran en los datos de la API');
          return;
        }

        const { valorMuestra, nivelAlerta, fecha_hora_alarma, esAlarma } = firstAlarm;

        // Verificar si es una alarma
        if (esAlarma) {
          const message = `Nivel Alerta: ${nivelAlerta}. \nFecha y Hora: ${fecha_hora_alarma}. \nValor de Muestra: ${valorMuestra}. `;

          if ('Notification' in window && Notification.permission === 'granted') {
            // Verificar si es un dispositivo iOS
            const isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

            if (isIOS) {
              // Mostrar una notificación local en dispositivos iOS
              new Notification('Nueva alarma', { body: message });
            } else {
              // Mostrar una notificación push en otros dispositivos
              const notification = new Notification('Nueva alarma', {
                body: message,
                icon: 'logo.png' // Opcional: icono de la notificación
              });

              notification.onclick = () => {
                // Hacer algo cuando el usuario hace clic en la notificación
                console.log('El usuario hizo clic en la notificación');
              };
            }
          }

          // Enviar notificación por correo electrónico
          sendEmailNotification(message);
        } else {
          // Enviar notificación de "Sin novedad" por correo electrónico
          sendEmailNotification("Sin novedad");
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    const sendEmailNotification = async (message) => {
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message })
        });

        if (!response.ok) {
          throw new Error('Error al enviar el correo electrónico');
        }

        const data = await response.json();
        console.log('Respuesta del servidor:', data);
      } catch (error) {
        console.error('Error al enviar la notificación por correo electrónico:', error);
      }
    };

    const intervalId = setInterval(fetchData, 2 * 60 * 1000); // Actualizar cada 2 minutos
    fetchData(); // Realizar una solicitud inmediata cuando el componente se monta

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Solicitar permiso al usuario para recibir notificaciones
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          console.warn('El usuario no ha permitido las notificaciones');
        }
      });
    }
  }, []);

  return (
    <PrimeReactProvider>
      <Routing />
      <ToastContainer/>
    </PrimeReactProvider>
  );
}

export default App;
