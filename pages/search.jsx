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
import usePagenation from '../hooks/usePagenation'

const Search = () => {
	const router = useRouter()
	const [resultPagenation, setResultPagenation] = useState(null)
	const isReady = usePagenation(resultPagenation, router, [resultPagenation])

	const searchInputRef = useRef()
	const [searchResult, setSearchResult] = useState(new Array())

	const search = (key) => {
		if (key === 'Enter') {
			if (searchInputRef.current.value.length !== 0) {
				router.push('/search?q=' + encodeURI(searchInputRef.current.value))
			}
		}
	}

	useEffect(() => {
		if (router.query.q !== undefined) {
			searchInputRef.current.value = decodeURI(router.query.q)

			const result = postData.getSearchResult(router.query.q.replace(/\s+/g, ' ').trim())
			const resultPagenation = new Pagenation(result, 5, 2)

			setSearchResult(result)
			setResultPagenation(resultPagenation)
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
					{isReady && searchResult.length !== 0 && resultPagenation !== null && router.query.q !== undefined ? (
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
