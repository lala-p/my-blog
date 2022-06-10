import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { noticeActions } from '../../reducers/noticeSlice'

import PageContainer from '../../components/PageContainer'
import MenuTab from '../../components/MenuTab'
import NoticeTitle from '../../components/NoticeTitle'
import DateBox, { UpdateDateBox } from '../../components/DateBox'
import Text from '../../components/Text'
import { ReturnIconTextLink } from '../../components/SpecialLink'
import Paragraph from '../../components/Paragraph'


const isNoticeCode = () => {
    return true
}

const NoticeContainer = styled.div`
    @media( max-width: 1080px ) {
        padding: 45px 0 0 0;
        
    }
    
    @media( max-width: 735px ) {
        width: 92%;
        padding: 35px 0 0 0;
        
    }

    @media( max-width: 512px ) {
        width: 95%;
        padding: 20px 0 0 0;
        
    }

    width: 90%;
    max-width: 1080px;
    margin: auto;
    padding: 50px 0 0 0;

`

const NoticeHead = styled.div`

    max-width: 1080px;
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #FFFFFF;

`
const NoticeBody = styled.div`
    
    max-width: 1080px;
    min-height: 500px;
    padding: 50px 0 50px 0;
    border-bottom: 1px solid #FFFFFF;
`

const DateContainer = styled.div`
    @media( max-width: 512px ) {
        margin-top: 30px;
    }

    margin-top: 40px;

`


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
            <NoticeContainer>
                    <ReturnIconTextLink link='/notice'>목록으로 돌아가기</ReturnIconTextLink>
                <NoticeHead>
                    <NoticeTitle>특수건강진단 기관 현황(`22.6.9. 기준)xxxxx xxxx xxxxxxxx xxxxx</NoticeTitle>
                    <DateContainer>
                        <div>
                            <DateBox></DateBox>
                        </div>
                        <UpdateDateBox></UpdateDateBox>
                    </DateContainer>
                </NoticeHead>
                <NoticeBody>
                    <Paragraph>
                        <Text>[해상도]</Text>
                        <Text>해상도는 쉽게 말하면 한 화면에 몇 개의 점이 찍히는가입니다.</Text>
                        <Text>1픽셀 x 1픽셀 크기를 하나의 점으로 보고, 그런 픽셀이 가로 1920개, 세로 1080개 들어가 총 207만 3천 6백 개의 점이 찍혀있는 것입니다.</Text>
                        <Text>같은 해상도라도 모니터의 크기가 다를 수 있습니다. 32인치의 점과 13인치의 점이 크기만 다를 뿐이겠죠. </Text>
                        <Text>그러니 같은 그림을 모니터 크기에 따라 늘렸다 줄였다 해서 보는 것이라고 생각하면 됩니다.</Text>    
                    </Paragraph>

                   
                </NoticeBody>
            </NoticeContainer>
        </PageContainer>
    )
}


export default Notice