import Button from '../Button'
import Vector from '../../../assets/icons/Vector.svg?react'

interface IProps {
	loading: boolean
}

const EnterButton = (props: IProps) => {
	return (
		<Button loading={props.loading} style={{ width: '72px', height: '48px' }} type='submit'>
			<Vector />
		</Button>
	)
}

export default EnterButton
