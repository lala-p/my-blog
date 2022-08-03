import { PageContainer, Left, Center, MainContainer, Box, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import SubTab from '@pageComponents/common/SubTab'
import HeadTab from '@pageComponents/common/HeadTab'

export async function getServerSideProps({ query: { noticeNo } }) {
	return {
		props: {
			noticeNo,
		},
	}
}

const NoticeDetail = (props) => {
	const noticeNo = props.noticeNo

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="notice" />
			</Left>
			<Center>
				<HeadTab />
				<MainContainer>
					<div>notice</div>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default NoticeDetail
