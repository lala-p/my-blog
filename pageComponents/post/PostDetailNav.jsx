import styled from 'styled-components'
import Link from 'next/link'

import { Text, EllipsisH5 } from '@components/Text'

export const PostDetailNav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	> * {
		width: 50%;
		border: 0.1rem solid ${({ theme }) => theme.color.sub};
		overflow: hidden;

		&:hover {
			background-color: gray;
			border-color: gray;
		}

		&:first-child {
			border-right: 0;
			border-top-left-radius: 0.45rem;
			border-bottom-left-radius: 0.45rem;
		}
		&:last-child {
			border-top-right-radius: 0.45rem;
			border-bottom-right-radius: 0.45rem;
		}
	}
`

const PostBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 7.75rem;
	padding: 0.875rem;
	padding-bottom: 1.5rem;

	text-align: center;
`

const PostTitle = styled.div`
	position: relative;
	height: 3rem;

	> * {
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
	}
`

export const NextPost = (props) => {
	if (props.data === undefined)
		return (
			<a style={{ pointerEvents: 'none' }}>
				<PostBox>
					<Text>next</Text>
				</PostBox>
			</a>
		)
	else
		return (
			<Link href={'/post/' + props.data.postCode} passHref>
				<a>
					<PostBox>
						<Text>next</Text>
						<PostTitle>
							<EllipsisH5 line="2" color="accent1" title={props.data.title}>
								{props.data.title}
							</EllipsisH5>
						</PostTitle>
					</PostBox>
				</a>
			</Link>
		)
}

export const PrevPost = (props) => {
	if (props.data === undefined)
		return (
			<a style={{ pointerEvents: 'none' }}>
				<PostBox>
					<Text>prev</Text>
				</PostBox>
			</a>
		)
	else
		return (
			<Link href={'/post/' + props.data.postCode} passHref>
				<a>
					<PostBox>
						<Text>prev</Text>
						<PostTitle>
							<EllipsisH5 line="2" color="accent1" title={props.data.title}>
								{props.data.title}
							</EllipsisH5>
						</PostTitle>
					</PostBox>
				</a>
			</Link>
		)
}
