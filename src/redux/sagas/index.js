import { takeEvery, put, call, fork, spawn } from "redux-saga/effects";

async function swapiGet(pattern) {
  const request = await fetch(`https://swapi.dev/api/${pattern}`);
  const data = await request.json();

  return data;
}
//task
export function* loadPeople() {
  throw new Error();
  const people = yield call(swapiGet, "people");
  yield put({ type: "SET_PEOPLE", payload: people.results });
}

//task
export function* loadPlanets() {
  const planets = yield call(swapiGet, "planets");
  yield put({ type: "SET_PLANETS", payload: planets.results });
}

//worker
export function* workerSaga() {
  yield spawn(loadPeople);
  yield spawn(loadPlanets);
}
//watcher
export function* watchLoadDataSaga() {
  yield takeEvery("LOAD_DATA", workerSaga);
}

export default function* rootSaga() {
  yield fork(watchLoadDataSaga);
}
