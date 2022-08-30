import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import { PageContainer, Left, Center, MainContainer } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PostLinkBox from '@pageComponents/common/PostLinkBox'
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
	const [currentPage, setCurrentPage] = useState(1)

	const search = (key) => {
		if (searchInputRef.current.value.length !== 0 && key === 'Enter') {
			router.push('/search?q=' + encodeURI(searchInputRef.current.value))
		}
	}

	useEffect(() => {
		if (Object.keys(router.query).length !== 0) {
			setCurrentPage(1)
			searchInputRef.current.value = decodeURI(router.query.q)

			const result = postData.getSearchResult(router.query.q.replace(/\s+/g, ' ').trim())
			setSearchResult(result)
			setResultPagenation(new Pagenation(result, 5, 2))
		} else {
			searchInputRef.current.value = ''
			setSearchResult(new Array())
			setResultPagenation(null)
		}
	}, [router.isReady, router.query])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="search" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<SearchInput ref={searchInputRef} onKeyPress={(e) => search(e.key)} />
					{searchResult.length !== 0 ? (
						<>
							<ColumnList between="3rem">
								{postData.getPostLinkDataList(resultPagenation.getPagenationDataList(currentPage)).map((data) => (
									<li key={data.postCode}>
										<PostLinkBox data={data} />
									</li>
								))}
							</ColumnList>
							<PagenationNav currentPage={currentPage} pagenation={resultPagenation} setPageEvent={setCurrentPage} />
						</>
					) : null}

					{resultPagenation !== null && searchResult.length === 0 ? <h1>결과 없음</h1> : null}
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Search
