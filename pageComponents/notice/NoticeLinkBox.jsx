import styled from 'styled-components'
import Link from 'next/link'

import { Icon_Megaphone1 } from '@components/Icon'
import { EllipsisH4 } from '@components/Text'
import { ColumnList } from '@components/List'
import { DateBox, CreatedDate, UpdatedDate } from '@components/DateBox2'

const ContainerBox = styled.div`
	width: 40rem;

	padding: 1rem;
	padding-top: 1.25rem;

	background-color: ${({ theme }) => theme.color.background1};

	border-radius: 1rem;

	> * {
		&:first-child {
			margin-bottom: 1.5rem;
		}
		&:nth-child(2) {
			margin-left: 2.5rem;
		}
	}
`

const NoticeLinkBox = (props) => {
	return (
		<Link href={'/notice/' + props.noticeNo}>
			<ContainerBox title={props.title}>
				<EllipsisH4>
					<Icon_Megaphone1 width="1.75rem" height="1.75rem" /> {props.title}
				</EllipsisH4>
				<DateBox>
					<CreatedDate>{props.createdDate}</CreatedDate>
					{props.updatedDate !== undefined ? <UpdatedDate>{props.updatedDate}</UpdatedDate> : null}
				</DateBox>
			</ContainerBox>
		</Link>
	)
}

export const NoticeLinkBoxList = (props) => {
	return (
		<ColumnList>
			{props.listData.map((data) => (
				<li key={data.noticeNo}>
					<NoticeLinkBox
						noticeNo={data.noticeNo}
						title={data.title}
						createdDate={data.createdDate}
						updatedDate={data.updatedDate}
					/>
				</li>
			))}
		</ColumnList>
	)
}

export default NoticeLinkBox
