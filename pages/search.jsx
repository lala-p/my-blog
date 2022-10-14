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
	const currentPage = router.query.page ?? 1

	const searchInputRef = useRef()

	const [searchResult, setSearchResult] = useState(new Array())
	const [resultPagenation, setResultPagenation] = useState(null)

	const search = (key) => {
		if (key === 'Enter') {
			if (searchInputRef.current.value.length !== 0) {
				router.push('/search?q=' + encodeURI(searchInputRef.current.value))
			}
		}
	}

	useEffect(() => {
		if (router.query.q !== undefined && !isNaN(currentPage)) {
			searchInputRef.current.value = decodeURI(router.query.q)

			const result = postData.getSearchResult(router.query.q.replace(/\s+/g, ' ').trim())
			const resultPagenation = new Pagenation(result, 5, 2)

			if (result.length === 0) {
				router.replace('/search?q=' + router.query.q)
			} else if (Number(currentPage) < 1) {
				router.replace('/search?q=' + router.query.q + '&page=1')
			} else if (Number(currentPage) > resultPagenation.getLastPageNum()) {
				router.replace('/search?q=' + router.query.q + '&page=' + resultPagenation.getLastPageNum())
			}

			setSearchResult(result)
			setResultPagenation(resultPagenation)
		} else if (router.query.q !== undefined && isNaN(currentPage)) {
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
					router.query.q !== undefined &&
					!isNaN(currentPage) &&
					Number(currentPage) > 0 &&
					Number(currentPage) <= resultPagenation.getLastPageNum() ? (
						<>
							<ColumnList between="3rem">
								{postData.getPostLinkDataList(resultPagenation.getPagenationDataList(currentPage)).map((data) => (
									<li key={data.postCode}>
										<Link href={'/post/' + data.postCode} passHref>
											<a>
												<PostDataBox data={data.postData} />
											</a>
										</Link>
									</li>
								))}
							</ColumnList>
							<PagenationNav pagenation={resultPagenation} />
						</>
					) : null}

					{router.query.q !== undefined && resultPagenation !== null && searchResult.length === 0 ? <h1>결과 없음</h1> : null}
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Search
