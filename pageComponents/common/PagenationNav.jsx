import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import _ from 'lodash'

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
	const router = useRouter()
	const pagenation = props.pagenation

	const currentPage = router.query.page !== undefined ? Number(router.query.page) : 1

	const { nextPage, prevPage, firstPage, lastPage, isFirstPages, isLastPages } = {
		nextPage: pagenation.getNextPage(currentPage),
		prevPage: pagenation.getPrevPage(currentPage),
		firstPage: 1,
		lastPage: pagenation.getLastPageNum(),
		isFirstPages: pagenation.isFirstPages(currentPage),
		isLastPages: pagenation.isLastPages(currentPage),
	}

	const getPagePath = (pageNum) => {
		let newQuery = _.cloneDeep(router.query)
		newQuery.page = pageNum

		return {
			pathname: router.pathname,
			query: newQuery,
		}
	}

	return (
		<Container>
			<ArrowBox show={!isFirstPages}>
				<Link href={getPagePath(firstPage)} passHref>
					<a>
						<Arrow>
							<Icon_DoubleLeft />
						</Arrow>
					</a>
				</Link>
				<Link href={getPagePath(prevPage)} passHref>
					<a>
						<Arrow>
							<Icon_Left />
						</Arrow>
					</a>
				</Link>
			</ArrowBox>
			<PageNumberList>
				{pagenation.getPageList(currentPage).map((page) => (
					<Link key={page} href={getPagePath(page)} passHref>
						<a>
							<PageNumber current={currentPage == page}>n{page}</PageNumber>
						</a>
					</Link>
				))}
			</PageNumberList>
			<ArrowBox show={!isLastPages}>
				<Link href={getPagePath(nextPage)} passHref>
					<a>
						<Arrow>
							<Icon_Right />
						</Arrow>
					</a>
				</Link>
				<Link href={getPagePath(lastPage)} passHref>
					<a>
						<Arrow>
							<Icon_DoubleRight />
						</Arrow>
					</a>
				</Link>
			</ArrowBox>
		</Container>
	)
}

export default PagenationNav
