import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { noticeActions } from '../reducers/noticeSlice'

import { getLastPageNum, getPages, getNextPageNum, PrevPageNum, isFirstPages, isLastPages } from '../commonFun/notice'



// const NextPagesButton = styled.div`

// `

// const PrevPagesButton = styled.div`


// `
// const FirstPageButton = styled.div`

// `

// const LastPageButton = styled.div`

// `

const PageNumberButton = styled.div`

`

const NumberButtonList = styled.ul`

`

const CenterBox = styled.div`

`

const LeftBox = styled.div`

`

const RightBox = styled.div`

`

const Container = styled.div`

`

const NoticePagenationNav = props => {
    
    const dispatch = useDispatch()

    const currentPage = useSelector((state) => state.notice.currentPage)
    const limit = useSelector((state) => state.notice.limit)
    const pageLimit = useSelector((state) => state.notice.pageLimit)


    return (
        <Container>
            
        </Container>
    )
}


export default NoticePagenationNav