import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { PageContainer, Left, Center, MainContainer } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PostDataBox from '@pageComponents/common/PostDataBox'
import PagenationNav from '@pageComponents/common/PagenationNav'
import SearchInput from '@pageComponents/search/SearchInput'
import { ColumnList } from '@components/List'

import { postData } from '@data'
import { Pagenation } from '@data/dataClass'

const Search = () => {
	const router = useRouter()

	const searchInputRef = useRef()

	const [searchResult, setSearchResult] = useState(new Array())
	const [resultPagenation, setResultPagenation] = useState(null)

	const search = (key) => {
		if (key === 'Enter') {
			if (Object.keys(router.query).length === 0) {
				router.replace('/search?q=' + encodeURI(searchInputRef.current.value) + '&page=1')
			} else if (searchInputRef.current.value.length !== 0) {
				router.push('/search?q=' + encodeURI(searchInputRef.current.value) + '&page=1')
			}
		}
	}

	const setPage = (pageNum) => {
		router.push('/search?q=' + router.query.q + '&page=' + pageNum)
	}

	useEffect(() => {
		if (router.query.q !== undefined && router.query.page !== undefined) {
			searchInputRef.current.value = decodeURI(router.query.q)

			const result = postData.getSearchResult(router.query.q.replace(/\s+/g, ' ').trim())
			const resultPagenation = new Pagenation(result, 5, 2)

			if (isNaN(router.query.page)) {
				router.replace('/search')
			} else if (parseInt(router.query.page) < 1) {
				router.replace('/search?q=' + router.query.q + '&page=1')
			} else if (parseInt(router.query.page) > resultPagenation.getLastPageNum()) {
				router.replace('/search?q=' + router.query.q + '&page=' + resultPagenation.getLastPageNum())
			} else {
				setSearchResult(result)
				setResultPagenation(resultPagenation)
			}
		} else if (router.query.q !== undefined || router.query.page !== undefined) {
			router.replace('search')
		} else {
			searchInputRef.current.value = ''
			setSearchResult(new Array())
			setResultPagenation(null)
		}
	}, [router.isReady, router.query.q])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="search" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<SearchInput ref={searchInputRef} onKeyPress={(e) => search(e.key)} />
					{searchResult.length !== 0 &&
					resultPagenation !== null &&
					!isNaN(router.query.page) &&
					parseInt(router.query.page) > 0 &&
					parseInt(router.query.page) <= resultPagenation.getLastPageNum() ? (
						<>
							<ColumnList between="3rem">
								{postData.getPostLinkDataList(resultPagenation.getPagenationDataList(router.query.page)).map((data) => (
									<li key={data.postCode}>
										<Link href={'/post/' + data.postCode} passHref>
											<a>
												<PostDataBox data={data.postData} />
											</a>
										</Link>
									</li>
								))}
							</ColumnList>
							<PagenationNav currentPage={router.query.page} pagenation={resultPagenation} setPageEvent={setPage} />
						</>
					) : null}

					{resultPagenation !== null && searchResult.length === 0 ? <h1>결과 없음</h1> : null}
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Search
