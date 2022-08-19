import Link from 'next/link'
import styled from 'styled-components'

import Text, { EllipsisText, SelectNoneText } from '@components/Text'
import Box from '@components/Box'

import { dateFormat2 } from '@commonFun/date'

export const NoticeContainer = styled.div`
	display: flex;
	flex-direction: row;

	> div {
		width: auto;

		&:nth-child(2) {
			margin-left: 1rem;
			max-width: 70%;

			@media (max-width: 576px) {
				max-width: 70%;
			}
		}
		&:nth-child(3) {
			margin-left: auto;
		}
	}
`
const NoticeTitle = styled(EllipsisText)`
	cursor: pointer;
`

export const NextNotice = (props) => {
	return (
		<NoticeContainer next>
			<Box selectNone>다음글&nbsp;|</Box>
			<Link href={'/notice/' + props.data.noticeNo}>
				<NoticeTitle>{props.data.title}</NoticeTitle>
			</Link>
			<Text>{dateFormat2(props.data.createdDate)}</Text>
		</NoticeContainer>
	)
}

export const PrevNotice = (props) => {
	return (
		<NoticeContainer>
			<Box selectNone>이전글&nbsp;|</Box>
			<Link href={'/notice/' + props.data.noticeNo}>
				<NoticeTitle>{props.data.title}</NoticeTitle>
			</Link>
			<Text>{dateFormat2(props.data.createdDate)}</Text>
		</NoticeContainer>
	)
}
export const UndefinedNextNotice = () => {
	return (
		<NoticeContainer next>
			<SelectNoneText color="sub">다음글&nbsp;|&nbsp;</SelectNoneText>
		</NoticeContainer>
	)
}

export const UndefinedPrevNotice = () => {
	return (
		<NoticeContainer next>
			<SelectNoneText color="sub">이전글&nbsp;|&nbsp;</SelectNoneText>
		</NoticeContainer>
	)
}

export const NoticeDetailNav = styled.div`
	margin: 0 1rem;
	padding: 0.75rem 1rem;
	border: 0.063rem solid ${({ theme }) => theme.color.text};

	> * {
		&:first-child {
			border-bottom: 0.063rem solid ${({ theme }) => theme.color.text};
			padding-bottom: 0.75rem;
		}
		&:last-child {
			padding-top: 0.75rem;
		}
	}
`
