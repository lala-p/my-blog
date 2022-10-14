import { useRouter } from 'next/router'

import { PageContainer, Left, Center } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import PagenationNav from '@pageComponents/common/PagenationNav'
import { IndexMainContainer, Notice } from '@pageComponents/notice'
import NoticeLinkBox from '@pageComponents/notice/NoticeLinkBox'
import { ColumnList } from '@components/List'
import { IconText, IconBox, Icon_Megaphone1 } from '@components/Icon'

import { dateFormat1 } from '@commonFun/date'

import { noticeData } from '@data'
import { Pagenation } from '@data/dataClass'

const noticePagenation = new Pagenation(noticeData.getSortedNoticeNoList(), 2, 10)

const NoticeHome = () => {
	const router = useRouter()

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="notice" />
			</Left>
			<Center>
				<HeadTab />
				<IndexMainContainer>
					<IconText between="6rem">
						<IconBox width="4rem" height="4rem" absolute selectNone>
							<Icon_Megaphone1 />
						</IconBox>
						<Notice>공지사항</Notice>
					</IconText>
					<ColumnList between="2rem">
						{noticeData.getNoticeLinkDataList(noticePagenation.getPagenationDataList(router.query.page ?? 1)).map((data) => (
							<li key={data.noticeNo}>
								<NoticeLinkBox
									noticeNo={data.noticeNo}
									title={data.title}
									createdDate={dateFormat1(data.createdDate)}
									updatedDate={data.updatedDate !== undefined ? dateFormat1(data.updatedDate) : undefined}
								/>
							</li>
						))}
					</ColumnList>
					<PagenationNav pagenation={noticePagenation} />
				</IndexMainContainer>
			</Center>
		</PageContainer>
	)
}

export default NoticeHome
