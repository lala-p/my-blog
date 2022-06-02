import { combineReducers } from '@reduxjs/toolkit'

import modeSlice from './modeSlice'

const rootReducer = combineReducers(
    {
        mode: modeSlice,

    }
)

export default rootReducer