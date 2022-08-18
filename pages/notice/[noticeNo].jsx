import { PageContainer, Left, Center, MainContainer, Title, Writer, Content } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { DetailMainContainer } from '@pageComponents/notice'
import { NoticeBody, NoticeHead } from '../../pageComponents/notice'
import { DateBox, CreatedDate, UpdatedDate } from '@pageComponents/notice/DateBox'

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
					<DetailMainContainer>
						<NoticeHead>
							<Title>공지사항 Notice notice</Title>
							<Writer>lala-p</Writer>
							<DateBox>
								<CreatedDate>2022년 10월 10일</CreatedDate>
								{true !== undefined ? <UpdatedDate>2022년 10월 11일</UpdatedDate> : null}
							</DateBox>
						</NoticeHead>
						<NoticeBody>
							<Content></Content>
						</NoticeBody>
					</DetailMainContainer>
				</MainContainer>
			</Center>
		</PageContainer>
	)
}

export default NoticeDetail
