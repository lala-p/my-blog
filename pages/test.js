import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NoticePagenationNav from '../components/NoticePagenationNav'



const Test = () => {
    const currentPage = useSelector((state) => state.notice.currentPage)

    

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <NoticePagenationNav />
            <br />
            { currentPage }
           
        </div>
    )
}

export default Test