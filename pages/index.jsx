import { useState, useEffect } from 'react'

import { PageContainer, Left, Center, MainContainer, Box, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PostLinkBox from '@pageComponents/home/PostLinkBox'
import NoticeLinkBox from '@pageComponents/home/NoticeLinkBox'

import { ColumnList } from '@components/List'

import { postData, noticeData } from '@data'

const Home = () => {
	const [postListStartIndex, setPostListStartIndex] = useState(0)
	const [postListData, setPostListData] = useState(new Array())

	const getPostListing = () => {
		const nextPostListingData = postData.getPostListingData(postListStartIndex, 2)

		if (nextPostListingData !== undefined) {
			const newPostListData = postListData.concat(nextPostListingData)

			setPostListData(newPostListData)
			setPostListStartIndex(postListStartIndex + 3)
		}
	}

	useEffect(() => {
		console.log(postListData)
	}, [postListData])

	// console.log(noticeData.getRecentNotice(3))

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="home" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<div>home</div>
					<h2>{postListStartIndex}</h2>
					<button onClick={getPostListing}>click</button>
					<button onClick={() => console.log(postListData)}>확인</button>
					<ColumnList between="0.75rem">
						{noticeData.getRecentNotice(3).map((data) => (
							<li key={data.noticeNo}>
								<NoticeLinkBox data={{ noticeNo: data.noticeNo }}>{data.title}</NoticeLinkBox>
							</li>
						))}
					</ColumnList>
					<br />
					{postListData.map((data, index) => (
						<div key={index}>
							<PostLinkBox data={data} />
						</div>
					))}

					{/* <PostLinkBox /> */}
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Home
