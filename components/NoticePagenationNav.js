import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { noticeActions } from '../reducers/noticeSlice'

import { LeftIconBox, RightIconBox, DoubleLeftIconBox, DoubleRightIconBox } from '../components/IconBox'

import { getLastPageNum, getPages, getNextPageNum, PrevPageNum, isFirstPages, isLastPages } from '../commonFun/notice'



const PageNumberButton = styled.li`
    width: 20px;
    
`

const NumberButtonList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`

const ArrowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 500px;
    height: 70px;

`

const NoticePagenationNav = props => {
    
    const dispatch = useDispatch()

    const currentPage = useSelector((state) => state.notice.currentPage)
    const limit = useSelector((state) => state.notice.limit)
    const pageLimit = useSelector((state) => state.notice.pageLimit)


    return (
        <Container>
            <ArrowBox>
                <LeftIconBox />
                <DoubleLeftIconBox />
            </ArrowBox>
            <NumberButtonList>
                <PageNumberButton>1</PageNumberButton>
                <PageNumberButton>2</PageNumberButton>
                <PageNumberButton>3</PageNumberButton>
                <PageNumberButton>4</PageNumberButton>
                <PageNumberButton>5</PageNumberButton>
                <PageNumberButton>6</PageNumberButton>
                <PageNumberButton>7</PageNumberButton>
                <PageNumberButton>8</PageNumberButton>
                <PageNumberButton>9</PageNumberButton>
                <PageNumberButton>10</PageNumberButton>
            </NumberButtonList>          
            <ArrowBox>
                <RightIconBox />
                <DoubleRightIconBox />
            </ArrowBox>
        </Container>
    )
}


export default NoticePagenationNavP