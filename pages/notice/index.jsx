import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PageContainer, Left, Center } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PagenationNav from '@pageComponents/common/PagenationNav'
import { IndexMainContainer, Notice } from '@pageComponents/notice'
import NoticeLinkBox from '@pageComponents/notice/NoticeLinkBox'
import { ColumnList } from '@components/List'
import { IconText, IconBox, Icon_Megaphone1 } from '@components/Icon'

import { noticeActions } from '@reducers/noticeSlice'

import { dateFormat1 } from '@commonFun/date'

import { noticeData } from '@data'

const limit = 2

const NoticeHome = () => {
	const dispatch = useDispatch()

	const currentPage = useSelector((state) => state.notice.currentPage)

	const pageData = {
		currentPage,
		nextPage: noticeData.getNextPage(currentPage),
		prevPage: noticeData.getPrevPage(currentPage),
		firstPage: 1,
		lastPage: noticeData.getLastPageNum(limit),
		isFirstPages: noticeData.isFirstPages(currentPage),
		isLastPages: noticeData.isLastPages(currentPage),
	}

	const setCurrentPage = (pageNum) => {
		dispatch(noticeActions.setCurrentPage(pageNum))
	}

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="notice" />
			</Left>
			<Center>
				<HeadTab />
				<IndexMainContainer>
					<IconText between="6rem">
						<IconBox width="4rem" height="4rem" absolute selectNone>
							<Icon_Megaphone1 />
						</IconBox>
						<Notice>공지사항</Notice>
					</IconText>
					<ColumnList between="2rem">
						{noticeData.getCurrentPageNoticeList(currentPage, limit).map((data) => (
							<li key={data.noticeNo}>
								<NoticeLinkBox
									noticeNo={data.noticeNo}
									title={data.title}
									createdDate={dateFormat1(data.createdDate)}
									updatedDate={data.updatedDate !== undefined ? dateFormat1(data.updatedDate) : undefined}
								/>
							</li>
						))}
					</ColumnList>
					<PagenationNav currentPageList={noticeData.getCurrentPageList(currentPage)} pageData={pageData} setPageEvent={setCurrentPage} />
				</IndexMainContainer>
			</Center>
		</PageContainer>
	)
}

export default NoticeHome
