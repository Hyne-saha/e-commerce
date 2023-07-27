import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

const store = configureStore({
    reducer: rootReducers,
})

export default store;
// store is an immutable(not changable) object tree in redux, it is a state container which holds the application state, whenever a store is created we need to specify reducer