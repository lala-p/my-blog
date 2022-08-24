import Link from 'next/link'
import styled from 'styled-components'

import Text, { EllipsisH4 } from '@components/Text'
import { DateBox2 } from '@components/DateBox'
import { CreatedDate2, UpdatedDate2 } from '@components/Date'
import Box from '@components/Box'

const ContainerBox = styled(Box)`
	display: flex;
	flex-direction: row;

	padding: 1.75rem 5rem 1.75rem 1rem;

	background-color: ${({ theme }) => theme.color.background1};

	border-radius: 0.5rem;

	overflow: hidden;
`

const NoticeNo = styled(Text)`
	margin: auto 0;

	/* ::after {
		content: '';
		margin: 0 1rem;
		border-right: 0.063rem solid ${({ theme }) => theme.color.text};
	} */
`

const NoticeInfo = styled.div`
	overflow: hidden;
	margin-left: 1rem;
	padding-left: 1rem;

	border-left: 0.063rem solid ${({ theme }) => theme.color.text};

	> * {
		&:first-child {
			margin-top: 0.25rem;
		}

		&:last-child {
			margin-top: 1.25rem;
		}
	}
`

const NoticeLinkBox = (props) => {
	return (
		<Link href={'/notice/' + props.noticeNo}>
			<ContainerBox title={props.title} cursorPointer>
				<NoticeNo size="3rem">No.{props.noticeNo}</NoticeNo>
				<NoticeInfo>
					<EllipsisH4>{props.title}</EllipsisH4>
					<DateBox2>
						<CreatedDate2>{props.createdDate}</CreatedDate2>
						{props.updatedDate !== undefined ? <UpdatedDate2>{props.updatedDate}</UpdatedDate2> : null}
					</DateBox2>
				</NoticeInfo>
			</ContainerBox>
		</Link>
	)
}

export default NoticeLinkBox
