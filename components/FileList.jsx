import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import Text, { EllipsisText } from './Text'

import { getParentData, getFileListDataByPostCode } from '../commonFun/post'

const Files = (props) => {
	const fileList = props.dataList.map((data, index) => (
		<li key={index}>
			<Link href={'/post/' + data.postCode}>
				<div title={data.title}>
					{props.currentPostCode == data.postCode ? (
						<EllipsisText>{data.title}</EllipsisText>
					) : (
						<EllipsisText color="text2">{data.title}</EllipsisText>
					)}
				</div>
			</Link>
		</li>
	))

	return fileList
}

const Container = styled.div`
	padding: 50px 0 0 10px;
`

const List = styled.ul`
	margin-left: 10px;
	width: 150px;
`

const FileList = (props) => {
	return (
		<Container>
			<Text>{getParentData(props.currentPostCode).name}</Text>
			<List>
				<Files
					dataList={getFileListDataByPostCode(props.currentPostCode)}
					currentPostCode={props.currentPostCode}
				/>
			</List>
		</Container>
	)
}

export default FileList
