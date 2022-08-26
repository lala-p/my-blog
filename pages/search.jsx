import { useEffect, useState } from 'react'
import { PageContainer, Left, Center, MainContainer } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PostLinkBox from '@pageComponents/common/PostLinkBox'
import SearchInput from '@pageComponents/search/SearchInput'
import { ColumnList } from '@components/List'

import { postData } from '@data'

const Search = () => {
	const [searchValue, setSearchValue] = useState('')
	const [searchMode, setSearchMode] = useState('title')
	const [searchResult, setSearchResult] = useState(new Array())

	const search = (key) => {
		if (searchValue.length !== 0 && key === 'Enter') {
			setSearchResult(postData.getSearchResult(searchValue.replace(/\s+/g, ' ').trim()))
			setSearchValue('')
		}
	}

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="search" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<SearchInput
						value={searchValue}
						onChange={(e) => {
							setSearchValue(e.target.value)
						}}
						onKeyPress={(e) => search(e.key)}
					/>
					<p>{searchValue}</p>
					<ColumnList between="3rem">
						{postData.getPostLinkDataList(searchResult).map((data) => (
							<li key={data.postCode}>
								<PostLinkBox data={data} />
							</li>
						))}
					</ColumnList>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Search
