import { PageContainer, Left, Center, Title, Writer } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { DetailMainContainer, NoticeHead, NoticeBody, NoticeFoot } from '@pageComponents/notice'
import { NoticeDetailNav, NextNotice, PrevNotice, UndefinedNextNotice, UndefinedPrevNotice } from '@pageComponents/notice/NoticeDetailNav'
import { DateBox, CreatedDate, UpdatedDate } from '@pageComponents/notice/DateBox'

import { noticeData } from '@data'
import { dateFormat1 } from '@commonFun/date'

export async function getServerSideProps({ query: { noticeNo } }) {
	return {
		props: {
			noticeNo,
		},
	}
}

const NoticeDetail = (props) => {
	const noticeNo = Number(props.noticeNo)
	const currentNotice = noticeData.getCurrentNotice(noticeNo)
	const nextNotice = noticeData.getNextNotice(noticeNo)
	const prevNotice = noticeData.getPrevNotice(noticeNo)

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="notice" />
			</Left>
			<Center>
				<HeadTab />
				<DetailMainContainer>
					<NoticeHead>
						<Title>{currentNotice.title}</Title>
						<Writer>{currentNotice.writer}</Writer>
						<DateBox>
							<CreatedDate>{dateFormat1(currentNotice.createdDate)}</CreatedDate>
							{currentNotice.updatedDate !== undefined ? <UpdatedDate>{dateFormat1(currentNotice.updatedDate)} </UpdatedDate> : null}
						</DateBox>
					</NoticeHead>
					<NoticeBody>{currentNotice.NoticeContent()}</NoticeBody>
					<NoticeFoot>
						<NoticeDetailNav>
							{nextNotice !== undefined ? <NextNotice data={nextNotice} /> : <UndefinedNextNotice />}
							{prevNotice !== undefined ? <PrevNotice data={prevNotice} /> : <UndefinedPrevNotice />}
						</NoticeDetailNav>
					</NoticeFoot>
				</DetailMainContainer>
			</Center>
		</PageContainer>
	)
}

export default NoticeDetail
