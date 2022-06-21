import { combineReducers } from '@reduxjs/toolkit'

import menuSlice from './menuSlice'
import postSlice from './postSlice'
import noticeSlice from './noticeSlice'
import testSlice from './testSlice'


const rootReducer = combineReducers(
    {
        menu  : menuSlice,
        post  : postSlice,
        notice: noticeSlice,
        test  : testSlice,
    
    }
)

export default rootReducer