import { PageContainer, Left, Center, MainContainer, Box, Content } from '../pageComponents/common'
import MenuTab from '../pageComponents/common/MenuTab'
import SubTab from '../pageComponents/common/SubTab'
import HeadTab from '../pageComponents/common/HeadTab'

const Profile = () => {
	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="profile" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<div>profile</div>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Profile
