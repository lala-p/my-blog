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
import NoticeLinkBox from '@pageComponents/notice/NoticeLinkBox'

import { getFolderNameByCode } from '@commonFun/folder'

// import { postDataEx } from '@data/postData'

const Test = () => {
	useEffect(() => {
		// console.log(postDataEx.postCode)
	}, [])

	return (
		<div>
			{/* {postDataEx.PostContent()} */}
			<Post
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
			<NoticeLinkBox
				noticeNo={1}
				title="공지사항 Notice notice"
				createdDate="2022년 1월 1일"
				updatedDate="2022년 3월 1일"
			/>
			<br />
		</div>
	)
}

export default Test
