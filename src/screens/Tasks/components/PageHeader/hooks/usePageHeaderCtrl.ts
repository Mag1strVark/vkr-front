import { useState } from 'react'

interface ISearchInputState {
	searchText: string
	filterDeveloperLevel: number | null
}
export type ISearchInputName = keyof ISearchInputState
export type ISearchInputValue = ISearchInputState[ISearchInputName]

const generateValue = (): ISearchInputState => ({
	filterDeveloperLevel: null,
	searchText: ''
})

const usePageHeaderCtrl = () => {
	const [pageHeaderValue, setPageHeaderValue] = useState<ISearchInputState>(generateValue())

	const handleChange = (name: ISearchInputName, value: ISearchInputValue) => {
		setPageHeaderValue(prev => ({ ...prev, [name]: value }))
	}

	return {
		pageHeaderValue,
		handleChange
	}
}

export default usePageHeaderCtrl
