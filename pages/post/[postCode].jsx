import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '@reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { PostContainer, PostHead, PostBody, PostFoot, SideContainer, PostTitle, Writer } from '@pageComponents/post'
import FileList from '@components/FileList'
import DateBox from '@components/DateBox'
import { TagList } from '@components/Tag'

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
					<FileList currentPostCode={postCode} />
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
