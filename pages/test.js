import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { testActions } from '../reducers/testSlice'
import Link from 'next/link'

const Test = () => {
    
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            dispatch(testActions.setTestMode('Test!Test!Test!Test!Test!Test!Test!Test!Test!Test!Test!Test!'))
            console.log(
            `App is changing to ${url} ${
              shallow ? 'with' : 'without'
            } shallow routing`
          )
        }
    
        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
          router.events.off('routeChangeStart', handleRouteChange)
        }

    }, [])

    return (
        <div>
            <h1>Test</h1>
            <Link href='/'>go home</Link>
        </div>
    )
}

export default Test