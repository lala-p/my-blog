import React from 'react'
import { useRouter } from 'next/router'

const Post = () => {

    const router = useRouter()
    const postCode = router.query.postCode

  return (
    <div>
      it's post <br /> 
      postCode : {postCode}
    </div>
  )
}


export default Post