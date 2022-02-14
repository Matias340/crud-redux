import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import actionTypes from "../../actions/actions.types";
import {axiosGetArticulos, axiosCreateArticulos, axiosDeleteArticulos, axiosUpdateArticulos, axiosGetArticulosById} from "../axios/axiosRequested";

export function* handleGetArticulos() {
    try {
        const articulos = yield call(axiosGetArticulos)
        console.log(articulos);
        yield put({ type: actionTypes.GET_ARTICULOS_SUCCESS, articulos: articulos})
    }catch(err) {
        yield put({ type: actionTypes.GET_ARTICULOS_FAILED, message: err.message})
    }
}

export function* handleCreateArticulos(state) {
    const {payload} = state;
    try {
        const articulos = yield call(axiosCreateArticulos, payload)
        yield put({ type: actionTypes.CREATE_ARTICULOS_SUCCESS, articulos: articulos})
    }catch(err) {
        yield put({ type: actionTypes.CREATE_ARTICULOS_FAILED, message: err.message})
    }
}

export function* handleUpdateArticulos(state) {
    const {payload : {id, formValue}} = state;
    console.log(id, formValue);
    try {
        const articulos = yield call(axiosUpdateArticulos, id, formValue)
        yield put({ type: actionTypes.UPDATE_ARTICULOS_SUCCESS, articulos: articulos})
    }catch(err) {
        yield put({ type: actionTypes.UPDATE_ARTICULOS_FAILED, message: err.message})
    }
}

export function* handleDeleteArticulos(state) {
    const {payload : id} = state;
    try {
        const articulos = yield call(axiosDeleteArticulos, id)
        yield put({ type: actionTypes.DELETE_ARTICULOS_SUCCESS, payload: id})
    }catch(err) {
        yield put({ type: actionTypes.DELETE_ARTICULOS_FAILED, message: err.message})
    }
}

export function* handleGetArticulosById(state) {
    const {payload} = state;
    try {
        const articulos = yield call(axiosGetArticulosById, payload)
        console.log(articulos);
        yield put({ type: actionTypes.GET_ARTICULOS_BYID_SUCCESS, articulos })
    }catch(err) {
        yield put({ type: actionTypes.GET_ARTICULOS_BYID_FAILED, message: err.message})
    }
}

//los watcher
export function* watcherArticulosSaga() {
    yield takeEvery(actionTypes.GET_ARTICULOS_REQUESTED, handleGetArticulos);
}

export function* watcherCreateArticulosSaga() {
    yield takeEvery(actionTypes.CREATE_ARTICULOS_REQUESTED, handleCreateArticulos);
}

export function* watcherDeleteArticulosSaga() {
    yield takeLatest(actionTypes.DELETE_ARTICULOS_REQUESTED, handleDeleteArticulos);
}

export function* watcherUpdateArticulosSaga() { 
    yield takeLatest(actionTypes.UPDATE_ARTICULOS_REQUESTED, handleUpdateArticulos);
}
export function* watcherArticulosByIdSaga() { 
    yield takeEvery(actionTypes.GET_ARTICULOS_BYID_REQUESTED, handleGetArticulosById);
}


export default function* rootSaga() {
    yield all([
        watcherArticulosSaga(),
        watcherCreateArticulosSaga(),
        watcherDeleteArticulosSaga(),
        watcherUpdateArticulosSaga(),
        watcherArticulosByIdSaga()
    ])
}