import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // currentMenu: 'home',
    subTabOpenState: true,
    // currentSubTabMode: 'folder',
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        // setCurrentMenu: (state, action) => {
        //     state.currentMenu = action.payload
        // },
        subTabOpen: (state, action) => {
            state.subTabState = true
        },
        subTabClose: (state, action) => {
            state.subTabState = false
        },
        subTabSwitch: (state, action) => {
            state.subTabState = !state.subTabState
        }
        // switchSubTabOpen: (state, action) => {
        //     state.subTabOpen = !state.subTabOpen
        // },
        // setCurrentSubTabMode: (state, action) => {
        //     state.currentSubTabMode = action.payload 
        // },
        
    },
})
// tabSlice 로 이름 바꾸기 
export const menuActions = menuSlice.actions

export default menuSlice.reducer