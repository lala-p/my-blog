import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '@reducers/menuSlice'

import { PageContainer, Left, Center, Title, Writer, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { MainContainer, PostContainer, PostHead, PostBody, PostFoot, SideContainer } from '@pageComponents/post'
import PostExplorer from '@components/PostExplorer'
import { TagContainer, TagType1 } from '@components/Tag'
import { DateBox1 } from '../../components/DateBox'
import { CreatedDate3, UpdatedDate1 } from '../../components/Date'

import { dateFormat1 } from '@commonFun/date'

import { postData } from '@data'

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
	const post = postData.getPost(postCode)
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
							<Title>{post.title}</Title>
							<Writer>{post.writer}</Writer>
							<DateBox1>
								<CreatedDate3>{dateFormat1(post.createdDate)}</CreatedDate3>
								{post.updatedDate !== undefined ? <UpdatedDate1>{dateFormat1(post.updatedDate)}</UpdatedDate1> : null}
							</DateBox1>
							<TagContainer horizontalGap="0.625rem" verticalGap="0.625rem">
								{post.tagList.map((tag) => (
									<TagType1 key={tag} cursorPointer>
										{tag}
									</TagType1>
								))}
							</TagContainer>
						</PostHead>
						<PostBody>{post.PostContent()}</PostBody>
						<PostFoot></PostFoot>
					</PostContainer>
					<SideContainer subTabOpen={subTabOpenState}>asasdasdasdasdasd</SideContainer>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default PostDetail
