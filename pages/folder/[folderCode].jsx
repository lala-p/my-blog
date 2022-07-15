import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../../reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer } from '../../components/page/commonPage'
import MenuTab from '../../components/tab/MenuTab'
import SubTab from '../../components/tab/SubTab'
import HeadTab from '../../components/tab/HeadTab'
import FolderList from '../../components/FolderList'

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
	}, [])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="post" />
				<SubTab open={subTabOpenState}>
					<FolderList />
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
