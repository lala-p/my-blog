import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


export const NoticeLinkBox = props => {

    return (    
        <Link href={'/notice' + props.noticeCode}>
            <div>
                {props.no} |
                {props.title} | 
                {props.date} 
            </div>
        </Link>
    )
} 


const NoticeLinkBoxList = props => {

    const MapBox = props => {
        const box = props.noticeDataList.map((noticeData, index) => (
            <NoticeLinkBox 
                no={index + 1}
                title={noticeData.title}
                date={noticeData.created_date} 
            ></NoticeLinkBox>
        ))
    
        return box
    }

    return (
        <div>
            <MapBox noticeDataList={props.dataList}></MapBox>            
        </div>
    )
}


export default NoticeLinkList