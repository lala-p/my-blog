import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '@reducers/menuSlice'

import { PageContainer, Left, Center, Title, Writer, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { MainContainer, PostContainer, PostHead, PostBody, PostFoot, SideContainer } from '@pageComponents/post'
import { DateBox, PostedDate, UpdatedDate } from '@pageComponents/post/DateBox'
import PostExplorer from '@components/PostExplorer'
import { TagContainer, TagType1 } from '@components/Tag'

import { dateFormat1 } from '@commonFun/date'

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
							<Title>{postData[postCode].title}</Title>
							<Writer>{postData[postCode]?.writer ?? 'lala-p'}</Writer>
							<DateBox>
								<PostedDate>{dateFormat1(postData[postCode].createdDate)}</PostedDate>
								{postData[postCode]?.updatedDate !== undefined ? <UpdatedDate>{dateFormat1(postData[postCode].updatedDate)}</UpdatedDate> : null}
							</DateBox>
							<TagContainer horizontalGap="0.625rem" verticalGap="0.625rem">
								{(postData[postCode]?.tagList ?? new Array()).map((tag) => (
									<TagType1 key={tag} cursorPointer>
										{tag}
									</TagType1>
								))}
							</TagContainer>
						</PostHead>
						<PostBody>{postData[postCode].PostContent()}</PostBody>
						<PostFoot></PostFoot>
					</PostContainer>
					<SideContainer subTabOpen={subTabOpenState}>asasdasdasdasdasd</SideContainer>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default PostDetail
