import { all } from "redux-saga/effects";
import sagasHandlers from "./handlers/sagasHandlers"

export default function* rootSaga() {
    yield all([sagasHandlers()]);
}
