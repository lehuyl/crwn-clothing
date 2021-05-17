import { all, call } from "@redux-saga/core/effects";
import { fetchCollectionsStart } from "./Shop/ShopSaga";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}