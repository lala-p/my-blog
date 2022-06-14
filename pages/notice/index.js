import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'

import { noticeActions } from '../../reducers/noticeSlice'

import PageContainer from '../../components/PageContainer'
import MenuTab from '../../components/MenuTab'
import NoticePagenation from '../../components/NoticePagenation'
import Text from '../../components/Text'


const NoticeHomeCenter = styled.div`
    
`

const NoticeList = props => {
    const Container = styled.div`
    
    `

    return (
        <Container>

        </Container>
    )

}


const NoticeHome = () => {

    const dispatch = useDispatch()

    const currentNoticeMode = useSelector((state) => state.notice.currentMode)
    const currentPage = useSelector((state) => state.notice.currentPage)


    useEffect(() => {
        
        if (currentNoticeMode != 'home') {
            dispatch(noticeActions.setCurrentNoticeMode('home'))
        }
        
        dispatch(noticeActions.setCurrentPage(5))

    }, [])


    return (
        <PageContainer menu='notice'>
            <NoticeHomeCenter>
                <Text>noticeHome</Text> 
                <br />
                <br />
                <Link href='/notice/1'>
                    <Text>first notice</Text>
                </Link>
                <br />
                <br />
                <NoticePagenation lastPage={25} pageLimit={10} />
                <br />
                <br />
                <Text>{currentPage}</Text>
                {/* <NoticePagenation limit={10} currenctPage={currentPage}></NoticePagenation> */}
            </NoticeHomeCenter>
        </PageContainer>
    )
}


export default NoticeHome