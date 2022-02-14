import actionTypes from './actions.types';

//GET USERS
export const getArticulos = () => {
    return {
        type: actionTypes.GET_ARTICULOS_REQUESTED
    };
};

export const getArticulosSuccess = (articulos) => {
    return {
        type: actionTypes.GET_ARTICULOS_SUCCESS,
        payload: articulos
    };
}

export const getArticulosFailed = (error) => {
    return {
        type: actionTypes.GET_ARTICULOS_FAILED,
        payload: error
    };
}


//ADD USERS
export const createArticulosRequested = (articulos) => {
    return {
        type: actionTypes.CREATE_ARTICULOS_REQUESTED,
        payload: articulos
    };
};

export const createArticulosSuccess = () => {
    return {
        type: actionTypes.CREATE_ARTICULOS_SUCCESS,
    };
};
export const createArticulosFailed = (error) => {
    return {
        type: actionTypes.CREATE_ARTICULOS_FAILED,
        payload: error
    };
};


//DELETE USERS
export const deleteArticulosRequested = (id) => {
    return {
        type: actionTypes.DELETE_ARTICULOS_REQUESTED,
        payload: id
    };
};

export const deleteArticulosSuccess = (id) => {
    return {
        type: actionTypes.DELETE_ARTICULOS_SUCCESS,
        payload: id
    };
};
export const deleteArticulosFailed = (error) => {
    return {
        type: actionTypes.DELETE_ARTICULOS_FAILED,
        payload: error
    };
};

//EDIT USERS
export const updateArticulosRequested = (formValue, id) => {
    return {
        type: actionTypes.UPDATE_ARTICULOS_REQUESTED,
        payload: {formValue, id}
    };
};

export const updateArticulosSuccess = (articulos) => {
    return {
        type: actionTypes.UPDATE_ARTICULOS_SUCCESS,
        payload: articulos
    };
};
export const updateArticulosFailed = (error) => {
    return {
        type: actionTypes.UPDATE_ARTICULOS_FAILED,
        payload: error
    };
};
export const getArticulosById = (id) => {
    return {
        type: actionTypes.GET_ARTICULOS_BYID_REQUESTED,
        payload: id
    }
}