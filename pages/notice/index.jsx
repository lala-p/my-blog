import { useSelector } from 'react-redux'
import { PageContainer, Left, Center } from '@pageComponents/common'
import MenuTab from '@pageComponents/common/MenuTab'
import HeadTab from '@pageComponents/common/HeadTab'
import { IndexMainContainer } from '@pageComponents/notice'
import NoticeLinkBox from '@pageComponents/notice/NoticeLinkBox'
import { ColumnList } from '@components/List'
import { IconText, IconBox, Icon_Megaphone1 } from '@components/Icon'
import Text from '@components/Text'
import NoticePagenationNav from '@pageComponents/notice/NoticePagenationNav'

import { dateFormat_ver1 } from '@commonFun/date'

import noticeData from '../../data/noticeData'

const NoticeHome = () => {
	const currentPage = useSelector((state) => state.notice.currentPage)

	return (
		<PageContainer>
			<Left>
				<MenuTab activeMenu="notice" />
			</Left>
			<Center>
				<HeadTab />
				<IndexMainContainer>
					<IconText between="1.25rem">
						<IconBox width="4rem" height="4rem" selectNone>
							<Icon_Megaphone1 />
						</IconBox>
						<Text size="3.75rem">공지사항</Text>
					</IconText>
					<ColumnList between="2rem">
						{noticeData.getCurrentPageNoticeList(currentPage).map((data) => (
							<li key={data.noticeNo}>
								<NoticeLinkBox
									noticeNo={data.noticeNo}
									title={data.title}
									createdDate={dateFormat_ver1(data.createdDate)}
									updatedDate={dateFormat_ver1(data.updatedDate)}
								/>
							</li>
						))}
					</ColumnList>
					<NoticePagenationNav currentPage={currentPage} />
				</IndexMainContainer>
			</Center>
		</PageContainer>
	)
}

export default NoticeHome
