import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { noticeActions } from '../reducers/noticeSlice'

// import { LeftIconBox, RightIconBox, DoubleLeftIconBox, DoubleRightIconBox } from '../components/IconBox'

import { getLastPageNum, getPages, getNextPageNum, getPrevPageNum, isFirstPages, isLastPages } from '../commonFun/notice'



const PageNumberButton = styled.li`
    width: 15px;
    
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

    ${ props => props.hide === true ? 'visibility: hidden;' : null }
    
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

    const [pageData, setPagetData] = useState(new Object())


    const setCurrentPage = useCallback((pageNum) => {
        dispatch(noticeActions.setCurrentPage(pageNum))
    }, [currentPage]) 


    useEffect(() => {
        let data = {
            next: getNextPageNum(currentPage, pageLimit),
            prev: getPrevPageNum(currentPage, pageLimit),
            first: 1,
            last: getLastPageNum(limit),
            isFirst: isFirstPages(currentPage, pageLimit),
            isLast: isLastPages(currentPage, limit, pageLimit),
        }

        setPagetData(data)

    }, [currentPage])


    return (
        <Container>
            <ArrowBox hide={ isFirstPages(currentPage, pageLimit) }>
                <div onClick={() => { setCurrentPage(pageData.first) }}>first</div>
                <div onClick={() => { setCurrentPage(pageData.prev) }}>prev</div>
            </ArrowBox>
            <NumberButtonList>
            { 
                getPages(currentPage, limit, pageLimit).map((page, index) => (
                    <PageNumberButton key={ index }>
                    { currentPage == page ? 
                        <div style={{color: 'yellow'}}>{page}</div>
                    :
                        <div onClick={() => { dispatch(noticeActions.setCurrentPage(page)) }}>{page}</div>
                    }
                        
                    </PageNumberButton>

                ))

            }
            </NumberButtonList>          
            <ArrowBox hide={ isLastPages(currentPage, limit, pageLimit) }>
                <div onClick={() => { setCurrentPage(pageData.next) }}>next</div>
                <div onClick={() => { setCurrentPage(pageData.last) }}>last</div>
            </ArrowBox>
        </Container>
    )
}


export default NoticePagenationNav