import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { menuActions } from '@reducers/menuSlice'
import { folderActions } from '@reducers/folderSlice'

import { PageContainer, Left, Center } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PostDataBox from '@pageComponents/common/PostDataBox'
import FolderLinkBox from '@pageComponents/common/FolderLinkBox'
import PagenationNav from '@pageComponents/common/PagenationNav'
import { PostFolderContainer, FolderContainer, FolderInfo, WrapBox } from '@pageComponents/folder'
import FolderExplorer from '@components/FolderExplorer'
import { DateBox4 } from '@components/DateBox'
import Text from '@components/Text'
import { ColumnList } from '@components/List'

import { folderData, postData } from '@data'
import { Pagenation } from '@data/dataClass'

import { dateFormat1 } from '@commonFun/date'
import usePagenation from '../../hooks/usePagenation'

export async function getStaticPaths() {
	return {
		paths: folderData.getAllFolderCode().map((folderCode) => '/folder/' + folderCode),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	return {
		props: {
			folderCode: params.folderCode,
		},
	}
}

const FolderDetail = (props) => {
	const router = useRouter()
	const folderCode = props.folderCode
	const folderChildPagenation = new Pagenation([...folderData.getChildList(folderCode)].reverse(), 5, 1)
	const isReady = usePagenation(folderChildPagenation, router)

	const dispatch = useDispatch()
	const subTabOpenState = useSelector((state) => state.menu.subTabOpenState)

	const folderType = folderData.getFolderType(folderCode)

	const folderLinkBoxClick = (folderCode) => {
		dispatch(folderActions.folderOpen(new Array(folderCode)))
		router.push('/folder/' + folderCode)
	}

	useEffect(() => {
		dispatch(menuActions.subTabOpen())
		dispatch(folderActions.folderOpen(folderData.getFolderPath(folderCode, folderType === 'folder')))
	}, [])

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
				{folderType === 'folder' ? (
					<FolderContainer>
						<WrapBox>
							{folderData.getFolderLinkDataList(folderData.getChildList(folderCode)).map((data) => (
								<FolderLinkBox key={data.folderCode} data={data} click={() => folderLinkBoxClick(data.folderCode)} />
							))}
						</WrapBox>
					</FolderContainer>
				) : (
					<PostFolderContainer>
						<FolderInfo>
							<h1>{folderData.getFolderName(folderCode)}</h1>
							<DateBox4>
								<Text>{dateFormat1(folderData.getChildLastPostedDate(folderCode))}</Text>
								{folderData.getChildLastUpdatedDate(folderCode) !== undefined ? <Text>{dateFormat1(folderData.getChildLastUpdatedDate(folderCode))}</Text> : null}
							</DateBox4>
						</FolderInfo>
						{isReady ? (
							<>
								<ColumnList between="3rem">
									{postData.getPostLinkDataList(folderChildPagenation.getPagenationDataList(router.query.page)).map((data) => (
										<li key={data.postCode}>
											<Link href={'/post/' + data.postCode} passHref>
												<a>
													<PostDataBox data={data.postData} />
												</a>
											</Link>
										</li>
									))}
								</ColumnList>
								<PagenationNav pagenation={folderChildPagenation} />
							</>
						) : (
							<h1>Loading...</h1>
						)}
					</PostFolderContainer>
				)}
			</Center>
		</PageContainer>
	)
}

export default FolderDetail
