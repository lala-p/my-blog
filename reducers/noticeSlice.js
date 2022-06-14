import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMode: 'home',
    currentPage: 1,
    currentNoticeCode: null,
    

}

const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {
        setCurrentNoticeMode: (state, action) => {
            state.currentMode = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setCurrentNoticeCode: (state, action) => {
            state.currentNoticeCode = action.payload
        },
        
        
    },
})

export const noticeActions = noticeSlice.actions
export default noticeSlice.reducer