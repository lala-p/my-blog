import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NoticePagenationNav from '../components/NoticePagenationNav'
import { NoticeLinkBoxList } from '../components/NoticeLinkBox'

import { getNoticePagenationList } from '../commonFun/notice'
import { getAllTag, getAllTagCountData, getParticularTagCountData, getTagCountDataRank, getAllTagOrderByCount } from '../commonFun/tag'
import { getSearchResultByTitleKeyword, getSearchResultByTag } from '../commonFun/post'



const Test = () => {
    const currentPage = useSelector((state) => state.notice.currentPage)
    const limit = useSelector((state) => state.notice.limit)
    
    const [keyword, setKeyword] = useState('') 


    useEffect(() => {
        // console.log(getAllTag())
        // console.log(getAllTagCountData())
        // console.log(getParticularTagCountData('react', '후기'))
        // console.log(getTagCountDataRank())
        // console.log(getAllTagOrderByCount())

        // getSearchResultByTitleKeyword('')
        // getSearchResultByTag('')

        // const word = 'react'
        // const regExp = new RegExp('/react/')
        // console.log(regExp.test('hahaha /react/ whssk tlfgdj'))


        console.log(getSearchResultByTag(['react']))
    }, [])



    return (
        <div>
            <NoticeLinkBoxList dataList={ getNoticePagenationList(currentPage, limit) } />
            <NoticePagenationNav /> 
            <br />
            { currentPage }
           
            {/* <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            <button onClick={() => console.log(getSearchResultByTitleKeyword(keyword))}>
                search
            </button> */}

        </div>
    )
}

export default Test