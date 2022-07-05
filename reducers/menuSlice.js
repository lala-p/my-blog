import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMenu: 'home',
    subTabOpen: false,
    currentSubTabMode: 'folder',
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setCurrentMenu: (state, action) => {
            state.currentMenu = action.payload
        },
        setSubTabOpen: (state, action) => {
            state.subTabOpen = action.payload
        },
        switchSubTabOpen: (state, action) => {
            state.subTabOpen = !state.subTabOpen
        },
        setCurrentSubTabMode: (state, action) => {
            state.currentSubTabMode = action.payload 
        },
        
    },
})

export const menuActions = menuSlice.actions

export default menuSlice.reducer