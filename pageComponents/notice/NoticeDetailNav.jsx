import Link from 'next/link'
import styled from 'styled-components'

import Text, { SelectNoneText } from '@components/Text'

import { dateFormat2 } from '@commonFun/date'

export const NoticeContainerBox = styled.div`
	display: flex;
	flex-direction: row;

	> * {
		width: auto;
		white-space: nowrap;

		&:nth-child(2) {
			margin: 0 1rem;
		}
		&:nth-child(3) {
			margin-left: auto;
		}
	}
`
const NoticeTitle = styled.a`
	font-size: 1rem;

	text-overflow: ellipsis;
	overflow: hidden;
`

export const NextNotice = (props) => {
	return (
		<NoticeContainerBox>
			<SelectNoneText>다음글&nbsp;|</SelectNoneText>
			<Link href={'/notice/' + props.data.noticeNo} passHref>
				<NoticeTitle>{props.data.title}</NoticeTitle>
			</Link>
			<Text>{dateFormat2(props.data.createdDate)}</Text>
		</NoticeContainerBox>
	)
}

export const PrevNotice = (props) => {
	return (
		<NoticeContainerBox>
			<SelectNoneText>이전글&nbsp;|</SelectNoneText>
			<Link href={'/notice/' + props.data.noticeNo} passHref>
				<NoticeTitle>{props.data.title}</NoticeTitle>
			</Link>
			<Text>{dateFormat2(props.data.createdDate)}</Text>
		</NoticeContainerBox>
	)
}
export const UndefinedNextNotice = () => {
	return (
		<NoticeContainerBox>
			<SelectNoneText color="sub">다음글&nbsp;|</SelectNoneText>
		</NoticeContainerBox>
	)
}

export const UndefinedPrevNotice = () => {
	return (
		<NoticeContainerBox>
			<SelectNoneText color="sub">이전글&nbsp;|</SelectNoneText>
		</NoticeContainerBox>
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
