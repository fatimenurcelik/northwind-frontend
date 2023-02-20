import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit'

const store  = configureStore({
    reducer :{rootReducer, devToolsEnhancer},
});

export default store;