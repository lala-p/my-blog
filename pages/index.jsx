import { PageContainer, Left, Center, MainContainer, Box, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'

const Home = () => {
	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="home" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<div>home</div>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Home
