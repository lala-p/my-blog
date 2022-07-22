import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import Text, { EllipsisText } from './Text'
import Box from './Box'
import { ColumnList } from './List'

import { getParentData, getFileListDataByPostCode } from '../commonFun/post'

const Files = (props) => {
	const fileList = props.dataList.map((data, index) => (
		<li key={index}>
			<Link href={'/post/' + data.postCode}>
				<Box title={data.title} cursorPointer>
					{props.currentPostCode == data.postCode ? (
						<EllipsisText>{data.title}</EllipsisText>
					) : (
						<EllipsisText color="text2">{data.title}</EllipsisText>
					)}
				</Box>
			</Link>
		</li>
	))

	return fileList
}

const Container = styled.div`
	padding: 50px 0 0 10px;
`

const List = styled(ColumnList)`
	margin-left: 10px;
	width: 150px;
`

const FolderName = styled(Text)`
	margin-bottom: 0.5rem;
`

const FileList = (props) => {
	return (
		<Container>
			<FolderName>{getParentData(props.currentPostCode).name}</FolderName>
			<List between="0.375rem">
				<Files
					dataList={getFileListDataByPostCode(props.currentPostCode)}
					currentPostCode={props.currentPostCode}
				/>
			</List>
		</Container>
	)
}

export default FileList
