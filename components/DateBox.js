import styled from 'styled-components'

import { ClockIconText, UpdateIconText } from './IconText'
import { BoldText } from './Text'
import SelectNone from './SelectNone'


const ContainerBox = styled.div`
     display: inline-flex;
    flex-direction: row;
`

const DateBox = props => {

    return (
        <ContainerBox>
            <ClockIconText>{ props.createdDate }</ClockIconText>

        { props.updatedDate != false ?
            <SelectNone>
                <BoldText>&nbsp;&nbsp;·&nbsp;&nbsp;</BoldText>
            </SelectNone>     
            : null
        }
        { props.updatedDate != false ?
            <UpdateIconText>{ props.updatedDate }</UpdateIconText>        
            : null
        }

        </ContainerBox>
    )
}

export default DateBox