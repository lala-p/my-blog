import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMode: 'home',
    currentPage: 1,
    currentNoticeNo: null,

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
        setCurrentNoticeNo: (state, action) => {
            state.currentNoticeNo = action.payload
        },
        
        
    },
})

export const noticeActions = noticeSlice.actions
export default noticeSlice.reducer