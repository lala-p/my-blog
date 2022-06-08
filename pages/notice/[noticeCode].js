import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

import { noticeActions } from '../../reducers/noticeSlice'

import PageContainer from '../../components/PageContainer'
import MenuTab from '../../components/MenuTab'


const isNoticeCode = () => {
    return true
}

const Notice = () => {

    const router = useRouter()
    const noticeCode = router.query.noticeCode
    
    const dispatch = useDispatch()
    
    const currentNoticeMode = useSelector((state) => state.notice.currentMode)

    useEffect(() => {
        if (!router.isReady) return;

        console.log(noticeCode)
        dispatch(noticeActions.setCurrentNoticeMode('detail'))
        dispatch(noticeActions.setCurrentNoticeCode(noticeCode))
    
    }, [router.isReady])


    return (
        <PageContainer menu='notice'>
        { isNoticeCode(noticeCode) ? 
        
        <div>
            noticeDetail {noticeCode}
        </div>
        :
        <div>
            404
        </div>
            
        }
        <br />
        </PageContainer>
    )
}


export default Notice