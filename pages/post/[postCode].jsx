import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../../reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer } from '../../components/page/commonPage'
import { PostContainer, PostHead, PostBody, PostFoot, SideContainer, WriterBox } from '../../components/page/postPage'
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
	}, [])

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
							<BoldText className="postTitle" size="35px">
								{postData[postCode].title}
							</BoldText>
							<WriterBox>lala-p</WriterBox>
							<DateBox
								createdDate={dateFormat(postData[postCode].createdDate, 6)}
								updatedDate={
									postData[postCode].updatedDate !== false ? dateFormat(postData[postCode].updatedDate, 6) : false
								}
							/>
							<TagList list={postData[postCode].tagList} />
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
