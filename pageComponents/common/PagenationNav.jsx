import styled from 'styled-components'

import { Icon_Left, Icon_Right, Icon_DoubleLeft, Icon_DoubleRight } from '@components/Icon'

const PageNumber = styled.div`
	height: 2rem;
	width: 2rem;

	font-size: 1rem;
	line-height: 2rem;
	text-align: center;
	color: ${({ current, theme }) => (current ? theme.color.accent1 : theme.color.text)};

	cursor: pointer;

	border-radius: 1rem;

	${({ current, theme }) => (current ? 'background-color: ' + theme.color.background1 : null)};
`

const PageNumberList = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	> * {
		&:not(:first-child) {
			margin-left: 1.25rem;
		}
	}

	@media (max-width: 768px) {
		> * {
			&:not(:first-child) {
				margin-left: 0.25rem;
			}
		}
	}
`
const ArrowBox = styled.div`
	visibility: hidden;

	display: flex;
	flex-direction: row;
	align-items: center;

	${({ show }) => (show === true ? 'visibility: visible;' : null)}

	> * {
		&:last-child {
			margin-left: 0.75rem;
		}
	}
`

const Arrow = styled.div`
	width: 1.25rem;
	height: 1.25rem;

	cursor: pointer;

	@media (max-width: 768px) {
		width: 1rem;
		height: 1rem;
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	height: auto;
	> * {
		&:not(:first-child) {
			margin-left: 4rem;
		}
	}

	@media (max-width: 512px) {
		justify-content: space-between;
		> * {
			&:not(:first-child) {
				margin-left: 0;
			}
		}
	}
`

const PagenationNav = (props) => {
	const currentPage = props.currentPage
	const pagenation = props.pagenation
	const { nextPage, prevPage, firstPage, lastPage, isFirstPages, isLastPages } = {
		nextPage: pagenation.getNextPage(currentPage),
		prevPage: pagenation.getPrevPage(currentPage),
		firstPage: 1,
		lastPage: pagenation.getLastPageNum(),
		isFirstPages: pagenation.isFirstPages(currentPage),
		isLastPages: pagenation.isLastPages(currentPage),
	}

	const setPage = (pageNum) => {
		props.setPageEvent(pageNum)
		window.scrollTo(0, 0)
	}

	return (
		<Container>
			<ArrowBox show={!isFirstPages}>
				<Arrow
					onClick={() => {
						setPage(firstPage)
					}}
				>
					<Icon_DoubleLeft />
				</Arrow>
				<Arrow
					onClick={() => {
						setPage(prevPage)
					}}
				>
					<Icon_Left />
				</Arrow>
			</ArrowBox>
			<PageNumberList between="1.25rem">
				{pagenation.getPageList(currentPage).map((page) => (
					<PageNumber
						key={page}
						onClick={() => {
							setPage(page)
						}}
						current={currentPage == page}
					>
						n{page}
					</PageNumber>
				))}
			</PageNumberList>
			<ArrowBox show={!isLastPages}>
				<Arrow
					onClick={() => {
						setPage(nextPage)
					}}
				>
					<Icon_Right />
				</Arrow>
				<Arrow
					onClick={() => {
						setPage(lastPage)
					}}
				>
					<Icon_DoubleRight />
				</Arrow>
			</ArrowBox>
		</Container>
	)
}

export default PagenationNav
