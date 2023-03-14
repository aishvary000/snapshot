import noteReducer from './note';
import uIReducer from './UI';
import {configureStore} from '@reduxjs/toolkit'
const store = configureStore(
{
    reducer:{
        note:noteReducer,
        ui:uIReducer
    }
}
)
export default store;