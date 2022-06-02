import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMode: 'home'

}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setCurrentMode: (state, action) => {
            state.currentMode = action.payload
        },

        
    },
})

export const modeActions = modeSlice.actions
export default modeSlice.reducer