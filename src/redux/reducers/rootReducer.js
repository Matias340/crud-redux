import {combineReducers} from 'redux';
import articulos from './ArticulosReducers';

const rootReducer = combineReducers({
    articulos: articulos
})

export default rootReducer;