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
        subTabOpen: (state, action) => {
            state.subTabState = true
        },
        subTabClose: (state, action) => {
            state.subTabState = false
        },
        subTabSwitch: (state, action) => {
            state.subTabOpenState = !state.subTabOpenState
        }

        
    },
})
// tabSlice 로 이름 바꾸기 
export const menuActions = menuSlice.actions

export default menuSlice.reducer