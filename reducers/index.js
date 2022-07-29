import { combineReducers } from '@reduxjs/toolkit'


import menuSlice from './menuSlice'
import folderSlice from './folderSlice'
import noticeSlice from './noticeSlice'
import themeSlice from './themeSlice'
import testSlice from './testSlice'


const rootReducer = combineReducers(
    {
        menu  : menuSlice,
        folder: folderSlice,
        notice: noticeSlice,
        theme : themeSlice,
        test  : testSlice,
    
    }
)

export default rootReducer