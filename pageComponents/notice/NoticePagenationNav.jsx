import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { noticeActions } from '@reducers/noticeSlice'

import { Icon_Left, Icon_Right, Icon_DoubleLeft, Icon_DoubleRight } from '@components/Icon'

import { noticeData } from '@data'

const PageNumber = styled.p`
	color: ${({ current, theme }) => (current ? theme.color.background2 : theme.color.text)};
	font-size: 1rem;
`

const PageNumberList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

const CircleBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.5rem;
	height: 2.5rem;

	background-color: ${({ current, theme }) => (current ? theme.color.text : theme.color.background2)};

	border: 1px solid ${({ theme }) => theme.color.text};
	border-radius: 50%;

	margin: 0 0.5rem;
`

const ArrowBox = styled.div`
	visibility: hidden;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	${({ show }) => (show === true ? 'visibility: visible;' : null)}
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 29rem;
	height: 4.5rem;
`

const NoticePagenationNav = (props) => {
	const dispatch = useDispatch()

	const currentPage = props.currentPage

	const setCurrentPage = (pageNum) => {
		dispatch(noticeActions.setCurrentPage(pageNum))
		window.scrollTo(0, 0)
	}

	const nextPage = noticeData.getNextPage(currentPage)
	const prevPage = noticeData.getPrevPage(currentPage)
	const firstPage = 1
	const lastPage = noticeData.getLastPageNum()
	const isNotFirstPages = !noticeData.isFirstPages(currentPage)
	const isNotLastPages = !noticeData.isLastPages(currentPage)

	return (
		<Container>
			<ArrowBox show={isNotFirstPages}>
				<CircleBox
					onClick={() => {
						setCurrentPage(firstPage)
					}}
				>
					<Icon_DoubleLeft width="1rem" height="1rem" />
				</CircleBox>
				<CircleBox
					onClick={() => {
						setCurrentPage(prevPage)
					}}
				>
					<Icon_Left width="1rem" height="1rem" />
				</CircleBox>
			</ArrowBox>
			<PageNumberList>
				{noticeData.getCurrentPages(currentPage).map((page) => (
					<CircleBox
						key={page}
						onClick={() => {
							setCurrentPage(page)
						}}
						current={currentPage == page}
					>
						<PageNumber current={currentPage == page}>{page}</PageNumber>
					</CircleBox>
				))}
			</PageNumberList>
			<ArrowBox show={isNotLastPages}>
				<CircleBox
					onClick={() => {
						setCurrentPage(nextPage)
					}}
				>
					<Icon_Right width="1rem" height="1rem" />
				</CircleBox>
				<CircleBox
					onClick={() => {
						setCurrentPage(lastPage)
					}}
				>
					<Icon_DoubleRight width="1rem" height="1rem" />
				</CircleBox>
			</ArrowBox>
		</Container>
	)
}

export default NoticePagenationNav
