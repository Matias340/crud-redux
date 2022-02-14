import actionTypes from '../actions/actions.types';

const initialState = {
    articulos: [],
    loading: false,
    error: null
}

const articulos = (state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.GET_ARTICULOS_REQUESTED:
        case actionTypes.CREATE_ARTICULOS_REQUESTED:
        case actionTypes.DELETE_ARTICULOS_REQUESTED: 
        case actionTypes.UPDATE_ARTICULOS_REQUESTED:              
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_ARTICULOS_SUCCESS:
            return {
                   ...state,
                   loading: false, articulos: action.articulos
               }
        case actionTypes.CREATE_ARTICULOS_SUCCESS:
        case actionTypes.UPDATE_ARTICULOS_SUCCESS: 
        case actionTypes.GET_ARTICULOS_BYID_SUCCESS:
            console.log(action);   
            return {
                ...state,
                loading: false,
                editArticulos: action.articulos
            }
        case actionTypes.DELETE_ARTICULOS_SUCCESS:
            return {
                ...state,
                loading: false,
                articulos: state.articulos.filter((articulo) => articulo.id !== action.payload) 
            }           
        case actionTypes.GET_ARTICULOS_FAILED:
        case actionTypes.CREATE_ARTICULOS_FAILED:
        case actionTypes.DELETE_ARTICULOS_FAILED:
        case actionTypes.UPDATE_ARTICULOS_FAILED:
        case actionTypes.GET_ARTICULOS_BYID_FAILED:        
            return {
                ...state,
                loading: false, error: action.message
            }
        case actionTypes.GET_ARTICULOS_BYID_REQUESTED:
            return {
                ...state,
                loading: false,
                articuloId: action.payload
            }    
        default:
            return state;    
        }    
};

export default articulos;