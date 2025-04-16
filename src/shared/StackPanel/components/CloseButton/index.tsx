import s from '../../stackPanel.module.css'
import CloseIcon from '../../../../assets/icons/Close.svg?react'

const CloseButton = () => {
	return (
		<div className={s.closeButton}>
			<CloseIcon />
		</div>
	)
}

export default CloseButton
