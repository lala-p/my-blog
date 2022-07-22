import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../../reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer, Box, Content } from '../../pageComponents/common'
import MenuTab from '../../pageComponents/common/MenuTab'
import SubTab from '../../pageComponents/common/SubTab'
import HeadTab from '../../pageComponents/common/HeadTab'
import {
	PostContainer,
	PostHead,
	PostBody,
	PostFoot,
	SideContainer,
	PostTitle,
	WriterBox,
} from '../../pageComponents/post'
import FileList from '../../components/FileList'
import DateBox from '../../components/DateBox'
import { TagList } from '../../components/Tag'

import { dateFormat } from '../../commonFun/date'

import postData from '../../data/postData'

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
					<FileList currentPostCode={postCode} />
				</SubTab>
			</Left>
			<Center subTabOpen={subTabOpenState}>
				<HeadTab />
				<MainContainer>
					<PostContainer>
						<PostHead>
							<PostTitle>{postData[postCode].title}</PostTitle>
							<WriterBox>{postData[postCode]?.writer ?? 'lala-p'}</WriterBox>
							<DateBox
								createdDate={dateFormat(postData[postCode].createdDate, 6)}
								updatedDate={
									postData[postCode]?.updatedDate !== undefined
										? dateFormat(postData[postCode].updatedDate, 6)
										: false
								}
							/>
							<TagList list={postData[postCode]?.tagList ?? new Array()} />
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
