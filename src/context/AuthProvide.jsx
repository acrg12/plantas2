

import React from "react";
import { useState, useEffect, createContext } from "react";

//Crea el contexto(supervariable, variable de session como las de php $_SESSION)
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //Se crea el useState para validar
  const [Autenticado, setAutenticado] = useState({});
  useEffect(() => {
    autenticarUsuario();
  }, []);

  //console.log(Autenticado)
  const autenticarUsuario = async () => {
    //obtener datos del usuario logueado

    const user = localStorage.getItem("user");
    //console.log("EL TOKEN", token);
    //console.log("EL USER", user);
    // validamos que los datos existan en el localstorage
    if (user === null) {
      //console.log("aca entro");
      return false;
    }
   //console.log(user);
    // si existen los transformamos en objeto javascript para manipular el ID del usuario
    const userObj = JSON.parse(user);
   /*  console.log("OBJETO COMPLETO", userObj);
    console.log("LOS DATOS DEL USER", userObj);
    console.log("EL ID DEL USER", userObj.ter_num_id); */

    const id = userObj.ter_num_id;
    console.log("EL ID: ", id);
    // Comprobacion del token del localstorage vs el del Backend
    try {
      const request = await fetch(
        "https://5d8d-181-204-95-202.ngrok-free.app/datasnap/rest/TServerMethods/tercero/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            //Authorization: token,
          },
        }
      );
   console.log("EL REQUEST", request);
      if (request.status === 500) {
        return false;
      } else {
        const data = await request.json();
       console.log("LA DATA", data.tercero[0]);
        setAutenticado(data.tercero[0]);
      }
    } catch (error) {
      console.log("EL ERROR", error);
    }
  };

  //=======================================================================================================
  return (
    <AuthContext.Provider value={{ Autenticado, setAutenticado }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;