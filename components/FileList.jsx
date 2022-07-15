import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { Text } from './Text'
import IconText from './IconText'

import { getParentData, getFileListDataByPostCode } from '../commonFun/post'

const List = (props) => {
	const list = props.dataList.map((data, index) => (
		<li key={index}>
			<Link href={'/post/' + data.postCode}>
				<a>
					{props.currentPostCode == data.postCode ? (
						<Text color="white">{data.title}OPEN</Text>
					) : (
						<Text color="gray">{data.title}</Text>
					)}
				</a>
			</Link>
		</li>
	))

	return list
}

const Container = styled.div`
	padding: 50px 0 0 10px;
`

const ListContainer = styled.ul`
	display: block;
	margin-left: 10px;
`

const FileList = (props) => {
	return (
		<Container>
			<Text>{getParentData(props.currentPostCode).name}</Text>
			<ListContainer>
				<List dataList={getFileListDataByPostCode(props.currentPostCode)} currentPostCode={props.currentPostCode} />
			</ListContainer>
		</Container>
	)
}

export default FileList
