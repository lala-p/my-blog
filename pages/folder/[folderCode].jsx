import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '@reducers/menuSlice'
import { folderActions } from '@reducers/folderSlice'

import { PageContainer, Left, Center } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PostLinkBox from '@pageComponents/common/PostLinkBox'
import PagenationNav from '@pageComponents/common/PagenationNav'
import { IndexMainContainer, FolderInfo } from '@pageComponents/folder'
import FolderExplorer from '@components/FolderExplorer'
import { DateBox4 } from '@components/DateBox'
import Text from '@components/Text'
import { ColumnList } from '@components/List'

import { folderData } from '@data'

import { dateFormat1 } from '@commonFun/date'

export async function getServerSideProps({ query: { folderCode } }) {
	return {
		props: {
			folderCode,
		},
	}
}

const FolderDetail = (props) => {
	const dispatch = useDispatch()

	const folderCode = props.folderCode
	const subTabOpenState = useSelector((state) => state.menu.subTabOpenState)
	const currentPage = useSelector((state) => state.folder.currentPage)

	const pageChildList = folderData.getPageChildList(folderCode, currentPage)

	const pageData = {
		currentPage,
		nextPage: folderData.getNextPage(currentPage),
		prevPage: folderData.getPrevPage(currentPage),
		firstPage: 1,
		lastPage: folderData.getLastPageNum(folderCode),
		isFirstPages: folderData.isFirstPages(currentPage),
		isLastPages: folderData.isLastPages(folderCode, currentPage),
	}

	const setCurrentPage = (pageNum) => {
		dispatch(folderActions.setCurrentPage(pageNum))
	}

	useEffect(() => {
		dispatch(menuActions.subTabOpen())
		dispatch(folderActions.folderOpen(folderData.getFolderPath(folderCode, false)))
	}, [])

	useEffect(() => {
		setCurrentPage(1)
		window.scrollTo(0, 0)
	}, [folderCode])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="post" />
				<SubTab open={subTabOpenState}>
					<FolderExplorer currentFolderCode={folderCode} />
				</SubTab>
			</Left>
			<Center subTabOpen={subTabOpenState}>
				<HeadTab />
				<IndexMainContainer>
					<FolderInfo>
						<h1>{folderData.getFolderName(folderCode)}</h1>
						<DateBox4>
							<Text>{dateFormat1(folderData.getChildLastPostedDate(folderCode))}</Text>
							{folderData.getChildLastUpdatedDate(folderCode) !== undefined ? <Text>{dateFormat1(folderData.getChildLastUpdatedDate(folderCode))}</Text> : null}
						</DateBox4>
					</FolderInfo>
					<ColumnList between="3rem">
						{pageChildList.map((data) => (
							<li key={data.postCode}>
								<PostLinkBox data={data} />
							</li>
						))}
					</ColumnList>
					<PagenationNav currentPageList={folderData.getCurrentPageList(folderCode, currentPage)} pageData={pageData} setPageEvent={setCurrentPage} />
				</IndexMainContainer>
			</Center>
		</PageContainer>
	)
}

export default FolderDetail
