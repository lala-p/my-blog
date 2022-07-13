import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NoticePagenationNav from '../components/NoticePagenationNav'
import { NoticeLinkBoxList } from '../components/NoticeLinkBox'

import { getNoticePagenationList } from '../commonFun/notice'
import { getAllTag, getAllTagCountData, getParticularTagCountData, getTagCountDataRank, getAllTagOrderByCount } from '../commonFun/tag'



const Test = () => {
    const currentPage = useSelector((state) => state.notice.currentPage)
    const limit = useSelector((state) => state.notice.limit)
    

    useEffect(() => {
        console.log(getAllTag())
        console.log(getAllTagCountData())
        console.log(getParticularTagCountData('react', '후기'))
        console.log(getTagCountDataRank())
        console.log(getAllTagOrderByCount())

    }, [])

    return (
        <div>
            <NoticeLinkBoxList dataList={ getNoticePagenationList(currentPage, limit) } />
            <NoticePagenationNav /> 
            <br />
            { currentPage }
           
        </div>
    )
}

export default Test