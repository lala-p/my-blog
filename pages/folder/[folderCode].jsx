import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../../reducers/menuSlice'
import { folderActions } from '../../reducers/folderSlice'

import { PageContainer, Left, Center, MainContainer, Box, Content } from '../../pageComponents/common'
import MenuTab from '../../pageComponents/common/MenuTab'
import SubTab from '../../pageComponents/common/SubTab'
import HeadTab from '../../pageComponents/common/HeadTab'
import FolderList from '../../components/FolderList'

import { getFolderParents } from '../../commonFun/folder'

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
		dispatch(folderActions.folderOpen(getFolderParents(folderCode, true)))
	}, [])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="post" />
				<SubTab open={subTabOpenState}>
					<FolderList currentFolderCode={folderCode} />
				</SubTab>
			</Left>
			<Center subTabOpen={subTabOpenState}>
				<HeadTab />
				<MainContainer>
					<div>folder</div>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default FolderDetail
