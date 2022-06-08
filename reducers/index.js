import { combineReducers } from '@reduxjs/toolkit'

import menuSlice from './menuSlice'
import noticeSlice from './noticeSlice'
import testSlice from './testSlice'


const rootReducer = combineReducers(
    {
        menu  : menuSlice,
        notice: noticeSlice,
        test  : testSlice,
    
    }
)

export default rootReducer