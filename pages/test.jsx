import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NoticePagenationNav from '../components/NoticePagenationNav'
import { NoticeLinkBoxList } from '../components/NoticeLinkBox'

import { getNoticePagenationList } from '../commonFun/notice'
import { getAllTag, getAllTagCountData, getParticularTagCountData, getTagCountDataRank, getAllTagOrderByCount } from '../commonFun/tag'
import { getSearchResultByTitleKeyword, getSearchResultByTag } from '../commonFun/post'

import { menuActions } from '../reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer } from '../components/page/commonPage'
import { PostContainer, PostHead, PostBody, PostFoot, SideContainer, WriterBox } from '../components/page/postPage'
import MenuTab from '../components/tab/MenuTab'
import SubTab from '../components/tab/SubTab'
import HeadTab from '../components/tab/HeadTab'
import FileList from '../components/FileList'
import { BoldText } from '../components/Text'
import { TextLink } from '../components/SpecialLink'
import DateBox from '../components/DateBox'
import { TagList } from '../components/Tag'

import { dateFormat } from '../commonFun/date'

import postData from '../postData'

const Test = () => {
	const currentPage = useSelector((state) => state.notice.currentPage)
	const limit = useSelector((state) => state.notice.limit)

	const [keyword, setKeyword] = useState('')

	useEffect(() => {}, [])

	return (
		<div>
			<TextLink link={'asdf'}>asd</TextLink>
		</div>
	)
}

export default Test
