import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'

import { noticeActions } from '../../reducers/noticeSlice'

import PageContainer from '../../components/PageContainer'
import MenuTab from '../../components/MenuTab'


const NoticeHomeCenter = styled.div`
    
`


const NoticeHome = () => {

    const dispatch = useDispatch()

    const currentNoticeMode = useSelector((state) => state.notice.currentMode)
    

    useEffect(() => {
        if (currentNoticeMode != 'home') {
            dispatch(noticeActions.setCurrentNoticeMode('home'))
        }
    

    }, [])


    return (
        <PageContainer menu='notice'>
            <NoticeHomeCenter>
                noticeHome 
                <br />
                <br />
                <Link href='/notice/aaa'>aaa</Link>
            </NoticeHomeCenter>
        </PageContainer>
    )
}


export default NoticeHome