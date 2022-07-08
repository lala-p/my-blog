import { useEffect } from 'react'

import { getAllTagList, getAllPostTagCount, getTagCountRank } from '../commonFun/post'


const Test = () => {

    useEffect(() => {
        console.log(getAllTagList())
        console.log(getAllPostTagCount())
        console.log(getTagCountRank())

    }, [])

    return (
        <div>
            test

        </div>
    )

}

export default Test