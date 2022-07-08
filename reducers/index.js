import { combineReducers } from '@reduxjs/toolkit'


import menuSlice from './menuSlice'
import postSlice from './postSlice'
import folderSlice from './folderSlice'
import noticeSlice from './noticeSlice'
import testSlice from './testSlice'



const rootReducer = combineReducers(
    {
        menu  : menuSlice,
        post  : postSlice,
        folder: folderSlice,
        notice: noticeSlice,
        test  : testSlice,
    
    }
)

export default rootReducer