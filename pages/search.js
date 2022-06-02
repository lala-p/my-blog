import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {

    const currentMode =  useSelector((state) => state.mode.currentMode)


    return (
        <div>
            it's search. <br /> 
            currentMode : {currentMode}
        </div>
    )
}


export default Search