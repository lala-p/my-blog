import Link from 'next/link'
import styled from 'styled-components'

import { IconText, IconBox, Icon_Megaphone1 } from '@components/Icon'
import { EllipsisText } from '@components/Text'

const ContainerBox = styled.div`
	display: inline-block;
	width: 20rem;
	padding: 0.75rem 1.25rem 0.75rem 1rem;
	background-color: ${({ theme }) => theme.color.background1};
	border-radius: 0.4rem;
`

const NoticeLinkBox = (props) => {
	return (
		<Link href={'/notice/' + props.data.noticeNo} passHref>
			<a>
				<ContainerBox>
					<IconText title={props.children} lineHeight="1.5rem" between="2rem">
						<IconBox width="1.2rem" height="1.2rem" absolute selectNone>
							<Icon_Megaphone1 />
						</IconBox>
						<EllipsisText size="1.2rem">{props.children}</EllipsisText>
					</IconText>
				</ContainerBox>
			</a>
		</Link>
	)
}

export default NoticeLinkBox
