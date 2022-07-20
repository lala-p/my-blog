import { PageContainer, Left, Center, MainContainer, Box, Content } from '../pageComponents/common'
import MenuTab from '../pageComponents/common/MenuTab'
import SubTab from '../pageComponents/common/SubTab'
import HeadTab from '../pageComponents/common/HeadTab'

const Search = () => {
	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="search" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<div>search</div>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default Search
