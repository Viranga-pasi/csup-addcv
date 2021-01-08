import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";

function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e){
        console.log(e);
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(e){
        console.log(e);
        return undefined
    }
}


const rootReducer = combineReducers({
    user :userReducer,
})

const presistedState = loadFromLocalStorage()


const store = createStore(
    rootReducer,
    presistedState,
    window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_()
)
store.subscribe(() => saveToLocalStorage(store.getState()))


export default store
// export default configureStore({
//     reducer: {
//         user :userReducer,
//     }
// }) 