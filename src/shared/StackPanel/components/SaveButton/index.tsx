import s from '../../stackPanel.module.css'
import SaveIcon from '../../../../assets/icons/SaveIcon.svg?react'

const SaveButton = () => {
	return (
		<span className={s.saveButton}>
			<span style={{ padding: '0 6px' }}>Сохранить</span>
			<div className={s.saveIcon}>
				<SaveIcon />
			</div>
		</span>
	)
}

export default SaveButton
