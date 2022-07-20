import { PageContainer, Left, Center, MainContainer, Box, Content } from '../../pageComponents/common'
import MenuTab from '../../pageComponents/common/MenuTab'
import SubTab from '../../pageComponents/common/SubTab'
import HeadTab from '../../pageComponents/common/HeadTab'

const NoticeHome = () => {
	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="notice" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<div>noticeHome</div>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default NoticeHome
