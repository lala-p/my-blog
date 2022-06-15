import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import noticeData from '../../noticeData'
const Post = () => {

  const router = useRouter()
  const postCode = parseInt(router.query.postCode)
  
  useEffect(() => {
    console.log(postCode)

  }, [])


  return (
    <div style={{height: '5000px'}}>
      it's post <br /> 
      postCode : {postCode}
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div onClick={() => {
                        console.log('asasasasasa')
                        window.scrollTo(0, 0)
                    }}>
                        asdasdasd
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Link href={'/post/' + (postCode + 1)}>asdfasdfsdf</Link>
    </div>
  )
}


export default Post