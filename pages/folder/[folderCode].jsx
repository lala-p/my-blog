import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'

import { menuActions } from '@reducers/menuSlice'
import { folderActions } from '@reducers/folderSlice'

import { PageContainer, Left, Center } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { IndexMainContainer, FolderInfo } from '@pageComponents/folder'
import { PostLinkBox, ThumbnailBox, PostInfo } from '@pageComponents/folder/PostLinkBox'
import FolderExplorer from '@components/FolderExplorer'
import { DateBox3, DateBox4 } from '@components/DateBox'
import Text, { EllipsisText, EllipsisH4 } from '@components/Text'
import { ColumnList } from '@components/List'
import { TagContainer, TagType2 } from '@components/Tag'

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

	useEffect(() => {
		dispatch(menuActions.subTabOpen())
		dispatch(folderActions.folderOpen(folderData.getFolderPath(folderCode, false)))
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
				<IndexMainContainer>
					<FolderInfo>
						<h1>{folderData.getFolderName(folderCode)}</h1>
						<DateBox4>
							<Text>{dateFormat1(folderData.getChildLastPostedDate(folderCode))}</Text>
							{folderData.getChildLastUpdatedDate(folderCode) !== undefined ? <Text>{dateFormat1(folderData.getChildLastUpdatedDate(folderCode))}</Text> : null}
						</DateBox4>
					</FolderInfo>
					<ColumnList between="3rem">
						{folderData.getChildPostDataList(folderCode).map((data) => (
							<li key={data.postCode}>
								<Link href={'/post/' + data.postCode}>
									<PostLinkBox cursorPointer>
										<ThumbnailBox selectNone>
											<Image src={data.thumbnail} layout="fill" objectFit="cover" />
										</ThumbnailBox>
										<PostInfo>
											<EllipsisH4 title={data.title}>{data.title}</EllipsisH4>
											<EllipsisText title={data.subTitle} color="sub" line="2">
												{data.subTitle}
											</EllipsisText>
											<TagContainer horizontalGap="0.625rem" verticalGap="0.625rem">
												{data.tagList.map((tag) => (
													<TagType2 key={tag}>{tag}</TagType2>
												))}
											</TagContainer>
											<DateBox3>
												<Text color="sub">{dateFormat1(data.createdDate)}</Text>
												{data.updatedDate !== undefined ? <Text color="sub">{dateFormat1(data.updatedDate)}</Text> : null}
											</DateBox3>
										</PostInfo>
									</PostLinkBox>
								</Link>
							</li>
						))}
					</ColumnList>
				</IndexMainContainer>
			</Center>
		</PageContainer>
	)
}

export default FolderDetail
