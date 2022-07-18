import { combineReducers } from '@reduxjs/toolkit'


import menuSlice from './menuSlice'
import folderSlice from './folderSlice'
import noticeSlice from './noticeSlice'
import testSlice from './testSlice'



const rootReducer = combineReducers(
    {
        menu  : menuSlice,
        folder: folderSlice,
        notice: noticeSlice,
        test  : testSlice,
    
    }
)

export default rootReducer