import { Title, Writer } from '@pageComponents/common'
import { NoticeHead, NoticeBody, NoticeFoot } from '@pageComponents/notice'
import { NoticeDetailNav, NextNotice, PrevNotice, UndefinedNextNotice, UndefinedPrevNotice } from '@pageComponents/notice/NoticeDetailNav'

import { DateBox1 } from '@components/DateBox'
import { CreatedDate1, UpdatedDate1 } from '@components/Date'

import { noticeData } from '@data'
import { dateFormat1 } from '@commonFun/date'

const Notice = (props) => {
	const noticeNo = Number(props.noticeNo)
	const currentNotice = noticeData.getCurrentNotice(noticeNo)
	const nextNotice = noticeData.getNextNotice(noticeNo)
	const prevNotice = noticeData.getPrevNotice(noticeNo)

	return (
		<>
			<NoticeHead>
				<Title>{currentNotice.title}</Title>
				<Writer>{currentNotice.writer}</Writer>
				<DateBox1>
					<CreatedDate1>{dateFormat1(currentNotice.createdDate)}</CreatedDate1>
					{currentNotice.updatedDate !== undefined ? <UpdatedDate1>{dateFormat1(currentNotice.updatedDate)} </UpdatedDate1> : null}
				</DateBox1>
			</NoticeHead>
			<NoticeBody>{currentNotice.NoticeContent()}</NoticeBody>
			<NoticeFoot>
				<NoticeDetailNav>
					{nextNotice !== undefined ? <NextNotice data={nextNotice} /> : <UndefinedNextNotice />}
					{prevNotice !== undefined ? <PrevNotice data={prevNotice} /> : <UndefinedPrevNotice />}
				</NoticeDetailNav>
			</NoticeFoot>
		</>
	)
}

export default Notice
