import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Post = () => {

  const router = useRouter()
  const postCode = router.query.postCode
  
  useEffect(() => {
    console.log(postCode)

  }, [])


  return (
    <div>
      it's post <br /> 
      postCode : {postCode}
    </div>
  )
}


export default Post