import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../../reducers/menuSlice'

import PageContainer from '../../components/PageContainer'



const FolderDetail = props => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(menuActions.setCurrentSubTabMode('folder'))
        dispatch(menuActions.setSubTabOpen(true))
    }, [])

    return (
        <PageContainer menu='post'>
            <a href='/post'>postHome</a>
            xzcvzxcvzxcv
        </PageContainer>
    )
}


export default FolderDetail