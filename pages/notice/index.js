import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'

import { noticeActions } from '../../reducers/noticeSlice'

import noticeData from '../../noticeData'

import PageContainer from '../../components/PageContainer'
import MenuTab from '../../components/MenuTab'
import NoticeList from '../../components/NoticeList'
import NoticePagenation from '../../components/NoticePagenation'
import Text from '../../components/Text'


const NoticeHomeContainer = styled.div`
    width: 90%;
    margin: auto;

`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const reversedNoticeData = noticeData.reverse()
const noticeListLimit = 10

const NoticeHome = () => {

    const dispatch = useDispatch()

    const currentNoticeMode = useSelector((state) => state.notice.currentMode)

    useEffect(() => {
        
        if (currentNoticeMode != 'home') {
            dispatch(noticeActions.setCurrentNoticeMode('home'))
        }
        
        console.log('a ' + noticeData.length)
        console.log('b ' +noticeListLimit)
        console.log('c ' +Math.floor(noticeData.length / noticeListLimit))
    
    }, [])


    return (
        <PageContainer menu='notice'>
            <NoticeHomeContainer>
                <Text>noticeHome</Text> 
                <br />
                <br />
                <Link href='/notice/1'>
                    <Text>first notice</Text>
                </Link>
                <br />
                <br />
                <Box>
                    <NoticeList dataList={reversedNoticeData} limit={noticeListLimit} />
                </Box>
                <Box style={{marginTop: '50px'}}>
                    <NoticePagenation 
                        lastPage={
                            noticeData.length % noticeListLimit == 0 ? 
                            Math.floor(noticeData.length / noticeListLimit) : Math.floor(noticeData.length / noticeListLimit) + 1  
                        } 
                        limit={10} 
                    />    
                </Box>
        
            </NoticeHomeContainer>
        </PageContainer>
    )
}


export default NoticeHome