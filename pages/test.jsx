import { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import Text, { EllipsisText, EllipsisH3 } from '@components/Text'
import { ColumnList } from '@components/List'
import Box, { PaddingBox } from '@components/Box'
import { Icon_Clock } from '@components/Icon'
import DateBox from '@components/DateBox'
import Post from '@components/Post'
import { TagContainer, TagType1, TagType2 } from '@components/Tag'

import { getFolderNameByCode } from '@commonFun/folder'

// import { postDataEx } from '@data/postData'

const ElBox = styled.div`
	width: 6rem;
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;

	display: -webkit-box;
	-webkit-line-clamp: 2; // 원하는 라인수
	-webkit-box-orient: vertical;
`

const Test = () => {
	useEffect(() => {
		// console.log(postDataEx.postCode)
	}, [])

	return (
		<div>
			{/* {postDataEx.PostContent()} */}
			{/* <Post
				thumbnail="/image/thumbnail/thumbnailTest.jpg"
				title="fkfkfkfksjdflkjsadlkfja;sdkf;alksd;flkasdjf"
				subTitle="subTitleasdfffffffffffffffffffffffffffffffffffffzxcvzcvzcvzxcvzxcvasdfasdfasdfqewrqwerqwerqwefdsafsdfasdvcxzxcvzxcvadfadsfwerqwerqwerfdsasdfsdf"
				tagList={[
					'reacr',
					'hooks',
					'useState',
					'12341234123',
					'asda',
					'111',
					'sdfsdf',
					'vcxvzxcvzcvzxcv',
					'asdfasdfsd',
					'dfsdf',
					'zsdsad',
					'xcvcvxv',
				]}
				createdDate="2022.10.11"
				updatedDate="2022.10.11"
			/>
			<Post
				thumbnail="/image/thumbnail/thumbnailTest.jpg"
				title="fkfkfkfksjdflkjsadlkfja;sdkf;alksd;flkasdjf"
				subTitle="subTitleasdfffffffffffffffffffffffffffffffffffffzxcvzcvzcvzxcvzxcvasdfasdfasdfqewrqwerqwerqwefdsafsdfasdvcxzxcvzxcvadfadsfwerqwerqwerfdsasdfsdf"
				tagList={['reacr', 'hooks', 'useState', '12341234123', 'asdadfafasdf', '111', 'sdfsdf']}
				createdDate="2022.10.11"
				updatedDate={undefined}
			/>
			<br /> */}
		</div>
	)
}

export default Test
