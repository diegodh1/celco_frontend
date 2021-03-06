export const VALIDARUSUARIO = 'validateUser';
export const REQUEST_USER = 'REQUEST_USER';
export const ERROR_USER = 'ERROR_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REQUEST_PATHS = 'REQUEST_PATHS';
export const ERROR_PATHS = 'ERROR_PATHS';
export const RECEIVE_PATHS = 'RECEIVE_PATHS';
export const REQUEST_DIRECTORY = 'REQUEST_DIRECTORY';
export const RECEIVE_DIRECTORY = 'RECEIVE_DIRECTORY';
export const ERROR_DIRECTORY = 'ERROR_DIRECTORY';
export const REQUEST_FILE = 'REQUEST_FILE';
export const RECEIVE_FILE = 'RECEIVE_FILE';
export const ERROR_FILE = 'ERROR_FILE';
export const REQUEST = 'REQUEST';

//******************LOGIN*******************
export const successSeccion = (user, id) => {
    return {
        type: RECEIVE_USER,
        usuario: {
            user,
            id,
            islogued: true,
        }
    }
}
export const errorSeccion = error => {
    return {
        type: ERROR_USER,
        message: 'usuario y/o contraseña incorrectos',
    }
}
export const requestSeccion = (user, pass) => {
    return {
        type: REQUEST_USER,
        usuario: {
            user,
            pass,
        }
    }
}
//**********************HOME********************/
export const requestPaths = () => {
    return {
        type: REQUEST_PATHS,
    }
}
export const successPaths = paths => {
    return {
        type: RECEIVE_PATHS,
        paths: paths['routes'],
    }
}
export const errorPaths = () => {
    return {
        type: ERROR_PATHS,
        message: 'Error al obtener las rutas',
    }
}
//******************GET DIRECTOY*****************/
export const requestDirectoy = path => {
    return {
        type: REQUEST_DIRECTORY,
        path,
    }
}
export const successDirectoy = paths => {
    return {
        type: RECEIVE_DIRECTORY,
        paths,
    }
}
export const errorDirectoy = () => {
    return {
        type: ERROR_DIRECTORY,
        message: 'Error al obtener el directorio',
    }
}
//**************FILE TO 64 BITS*************/
export const requestFile = path => {
    return {
        type: REQUEST_FILE,
        path,
    }
}
export const successFile = encoded64 => {
    return {
        type: RECEIVE_FILE,
        encoded64,
    }
}
export const errorFile = () => {
    return {
        type: ERROR_FILE,
        message: 'Error al obtener el archivo',
    }
}
export const request = () => {
    return {
        type: REQUEST,
    }
}