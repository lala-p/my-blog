import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '@reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { PostContainer, PostHead, PostBody, PostFoot, SideContainer, PostTitle, Writer } from '@pageComponents/post'
import PostExplorer from '@components/PostExplorer'
import DateBox from '@components/DateBox'
import { TagContainer, TagType1 } from '@components/Tag'

import { dateFormat_ver1 } from '@commonFun/date'

import postData from '@data/postData'

export async function getServerSideProps({ query: { postCode } }) {
	return {
		props: {
			postCode,
		},
	}
}

const PostDetail = (props) => {
	const dispatch = useDispatch()

	const postCode = props.postCode
	const subTabOpenState = useSelector((state) => state.menu.subTabOpenState)

	useEffect(() => {
		dispatch(menuActions.subTabOpen())
	}, [postCode])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="post" />
				<SubTab open={subTabOpenState}>
					<PostExplorer currentPostCode={postCode} />
				</SubTab>
			</Left>
			<Center subTabOpen={subTabOpenState}>
				<HeadTab />
				<MainContainer>
					<PostContainer>
						<PostHead>
							<PostTitle>{postData[postCode].title}</PostTitle>
							<Writer>{postData[postCode]?.writer ?? 'lala-p'}</Writer>
							<DateBox
								createdDate={dateFormat_ver1(postData[postCode].createdDate)}
								updatedDate={
									postData[postCode]?.updatedDate !== undefined
										? dateFormat_ver1(postData[postCode].updatedDate)
										: undefined
								}
							/>
							<TagContainer horizontalGap="0.625rem" verticalGap="0.625rem">
								{(postData[postCode]?.tagList ?? new Array()).map((tag) => (
									<TagType1 key={tag}>{tag}</TagType1>
								))}
							</TagContainer>
						</PostHead>
						<PostBody>
							<Content>{postData[postCode].PostContent()}</Content>
						</PostBody>
						<PostFoot></PostFoot>
					</PostContainer>
					<SideContainer subTabOpen={subTabOpenState}>asasdasdasdasdasd</SideContainer>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default PostDetail
