import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '@reducers/menuSlice'

import { PageContainer, Left, Center, MainContainer } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'
import FolderExplorer from '@components/FolderExplorer'

const PostHome = () => {
	const dispatch = useDispatch()

	const subTabOpenState = useSelector((state) => state.menu.subTabOpenState)

	useEffect(() => {
		dispatch(menuActions.subTabOpen())
	}, [])

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="post" />
				<SubTab open={subTabOpenState}>
					<FolderExplorer />
				</SubTab>
			</Left>
			<Center subTabOpen={subTabOpenState}>
				<HeadTab />
				<MainContainer>
					<div>postHome</div>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default PostHome
