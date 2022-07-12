import { useEffect } from 'react'

import MenuTab from '../components/tab/MenuTab'
import IconText from '../components/IconText'
import DateBox from '../components/DateBox'



const Test = () => {

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <br />
            <br />
            <br />
            <IconText 
                img='/image/icon/pencil_color3.svg' 
                width='15px' 
                height='15px' 
                top='4px' 
                between='10px' 
                fontSize='16px' 
                cursorPoint={ false }
            >
                lala-p
            </IconText>
            <br />
            <DateBox createdDate='2022년 10월 11일' updatedDate='2022년 10월 12일' />
            <br />
            <br />
            <br />
            <br />
            <DateBox createdDate='2022년 10월 11일' updatedDate={ false } />

        </div>
    )
}

export default Test