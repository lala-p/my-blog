import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../../reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer, Box } from '../../components/page/commonPage'
import { PostContainer, PostHead, PostBody, PostFoot, SideContainer, WriterBox, TagBox } from '../../components/page/postPage'
import MenuTab from '../../components/tab/MenuTab'
import SubTab from '../../components/tab/SubTab'
import HeadTab from '../../components/tab/HeadTab'
import FileList from '../../components/FileList'
import { BoldText } from '../../components/Text'
import DateBox from '../../components/DateBox'
import { TagList } from '../../components/Tag'

import { dateFormat } from '../../commonFun/date'

import postData from '../../postData'

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
		console.log(postData[postCode])
		console.log(postData[postCode].tagList)
	}, [postCode])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="post" />
				<SubTab open={subTabOpenState}>
					<FileList currentPostCode={postCode} />
				</SubTab>
			</Left>
			<Center subTabOpen={subTabOpenState}>
				<HeadTab />
				<MainContainer>
					<PostContainer>
						<PostHead>
							<Box bottom="1rem">
								<h1>{postData[postCode].title}</h1>
							</Box>
							<WriterBox>{postData[postCode].writer}</WriterBox>
							<Box top="0.25rem" bottom="0.25rem">
								<DateBox
									createdDate={dateFormat(postData[postCode].createdDate, 6)}
									updatedDate={
										postData[postCode].updatedDate != false ? dateFormat(postData[postCode].updatedDate, 6) : false
									}
								/>
							</Box>
							<Box top="1rem" bottom="2rem">
								<TagList list={postData[postCode].tagList} />
							</Box>
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
