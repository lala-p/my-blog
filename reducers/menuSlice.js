import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMenu: 'home'
    
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setCurrentMenu: (state, action) => {
            state.currentMenu = action.payload
        },

        
    },
})

export const menuActions = menuSlice.actions

export default menuSlice.reducer