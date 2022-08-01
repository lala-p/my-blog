import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { noticeActions } from '../reducers/noticeSlice'

// import { LeftIconBox, RightIconBox, DoubleLeftIconBox, DoubleRightIconBox } from '../components/IconBox'

import {
	getLastPageNum,
	getPages,
	getNextPageNum,
	getPrevPageNum,
	isFirstPages,
	isLastPages,
} from '../commonFun/notice'

const PageNumber = styled.p`
	color: ${({ current, theme }) => (current ? theme.color.background2 : theme.color.text)};
	font-size: 14px;
`

const PageNumberList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const CircleBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	width: 35px;
	height: 35px;

	background-color: ${({ current, theme }) => (current ? theme.color.text : theme.color.background2)};

	border: 1px solid ${({ theme }) => theme.color.text};
	border-radius: 50%;

	margin: 0 7px 0 7px;
`

const ArrowBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	${({ hide }) => (hide === true ? 'visibility: hidden;' : null)}
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 500px;
	height: 70px;
`

const NoticePagenationNav = (props) => {
	const dispatch = useDispatch()

	const currentPage = useSelector((state) => state.notice.currentPage)
	const limit = useSelector((state) => state.notice.limit)
	const pageLimit = useSelector((state) => state.notice.pageLimit)

	const [pageData, setPagetData] = useState(new Object())

	const setCurrentPage = useCallback(
		(pageNum) => {
			dispatch(noticeActions.setCurrentPage(pageNum))
		},
		[currentPage],
	)

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
			<ArrowBox hide={pageData.isFirst}>
				<div
					onClick={() => {
						setCurrentPage(pageData.first)
					}}
				>
					first
				</div>
				<div
					onClick={() => {
						setCurrentPage(pageData.prev)
					}}
				>
					prev
				</div>
			</ArrowBox>
			<PageNumberList>
				{getPages(currentPage, limit, pageLimit).map((page, index) => (
					<CircleBox
						key={index}
						onClick={() => {
							setCurrentPage(page)
						}}
						current={currentPage == page}
					>
						<PageNumber current={currentPage == page}>{page}</PageNumber>
					</CircleBox>
				))}
			</PageNumberList>
			<ArrowBox hide={pageData.isLast}>
				<div
					onClick={() => {
						setCurrentPage(pageData.next)
					}}
				>
					next
				</div>
				<div
					onClick={() => {
						setCurrentPage(pageData.last)
					}}
				>
					last
				</div>
			</ArrowBox>
		</Container>
	)
}

export default NoticePagenationNav
