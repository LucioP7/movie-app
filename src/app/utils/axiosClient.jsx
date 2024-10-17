import ApiConfig from './movies_helper'; 
// Axios: Biblioteca js que permite hacer peticiones http desde el cliente y el servidor
// Interfaz simple, soporte de promesas (utiliza, manejo de async/await)
// Intercepcion de solicitudes y respuestas (modificarlas o manejar errores)
// Transformaciones de datos automaticas (JSON)
// Cancelacion de solicitudes
import axios from 'axios';
// QueryString: Biblioteca que permite convertir objetos en cadenas de consulta y cadenas de consulta en objetos
// Serializacion (Convierte objetos en cadenas)
// Deserializacion (Convierte cadenas en objetos)
// Manipulación de parametros
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: ApiConfig.baseURL,
    // Encabezados de la peticion
    headers: {
        'content-type': 'application/json',
        'Authorization': ApiConfig.authorizationToken,
    },
    // Serializa los parametros y añade la clave de la api
    paramsSerializer: params => queryString.stringify(params),
});

// "Interceptor de solicitud"
// Este interceptor devuelve la configuracion de la solicitud
axiosClient.interceptors.response.use( async (config) => config); // Podemos modificar la config 

// "Interceptor de respuesta"
// Este interceptor verifica si la respuesta y los datos existen y devuelve los datos de la respuesta

// Si no existe, devuelve la respuesta completa. Uso: Esto es útil para simplificar el manejo de las 
// respuestas en otras partes de tu aplicación. En lugar de tener que acceder a response.data cada vez que 
// haces una solicitud
axiosClient.interceptors.response.use( async (response) => {
    if(responde && response.data) {
        return response.data;
    }
    return response;
});

export default axiosClient;