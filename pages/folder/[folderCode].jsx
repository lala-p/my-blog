import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '@reducers/menuSlice'
import { folderActions } from '@reducers/folderSlice'

import { PageContainer, Left, Center } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { IndexMainContainer, FolderInfo } from '@pageComponents/folder'
import FolderExplorer from '@components/FolderExplorer'
import { DateBox4 } from '../../components/DateBox'
import Text from '@components/Text'

import { folderData } from '../../data'

import { dateFormat1 } from '../../commonFun/date'

export async function getServerSideProps({ query: { folderCode } }) {
	return {
		props: {
			folderCode,
		},
	}
}

const FolderDetail = (props) => {
	const dispatch = useDispatch()

	const folderCode = props.folderCode
	const subTabOpenState = useSelector((state) => state.menu.subTabOpenState)

	useEffect(() => {
		dispatch(menuActions.subTabOpen())
		dispatch(folderActions.folderOpen(folderData.getFolderPath(folderCode, false)))
	}, [])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="post" />
				<SubTab open={subTabOpenState}>
					<FolderExplorer currentFolderCode={folderCode} />
				</SubTab>
			</Left>
			<Center subTabOpen={subTabOpenState}>
				<HeadTab />
				<IndexMainContainer>
					<FolderInfo>
						<h1>{folderData.getFolderName(folderCode)}</h1>
						<DateBox4>
							<Text>{dateFormat1(folderData.getChildLastPostedDate(folderCode))}</Text>
							{folderData.getChildLastUpdatedDate(folderCode) !== undefined ? <Text>{dateFormat1(folderData.getChildLastUpdatedDate(folderCode))}</Text> : null}
						</DateBox4>
					</FolderInfo>
				</IndexMainContainer>
			</Center>
		</PageContainer>
	)
}

export default FolderDetail
