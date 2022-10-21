import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const usePagenation = (pagenation, router = useRouter(), deps = new Array()) => {
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		if (pagenation === null) {
			setIsReady(false)
			return
		}

		let currentPage = router.query.page ?? 1
		let check = false

		if (isNaN(currentPage)) {
			let newQuery = _.cloneDeep(router.query)
			delete newQuery.page
			router.replace({
				pathname: router.pathname,
				query: newQuery,
			})
		} else if (Number(currentPage) < 1) {
			let newQuery = _.cloneDeep(router.query)
			newQuery.page = 1
			router.replace({
				pathname: router.pathname,
				query: newQuery,
			})
		} else if (Number(currentPage) > pagenation.getLastPageNum()) {
			let newQuery = _.cloneDeep(router.query)
			newQuery.page = pagenation.getLastPageNum()

			router.replace({
				pathname: router.pathname,
				query: newQuery,
			})
		} else {
			check = true
		}

		setIsReady(router.isReady && check)
	}, [router.isReady, router.query, ...deps])

	return isReady
}

export default usePagenation
