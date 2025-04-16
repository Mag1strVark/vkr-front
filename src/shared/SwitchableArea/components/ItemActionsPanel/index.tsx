import s from '../../SwitchableArea.module.css'
import NotActive from '../../../../assets/icons/notActivePanel.svg?react'
import Active from '../../../../assets/icons/Active.svg?react'
import GrayClose from '../../../../assets/icons/GrayClose.svg?react'
import PlusBlack from '../../../../assets/icons/PlusBlack.svg?react'
import { ReactNode, useState } from 'react'

interface IItemActions {
	title: string
	icon?: ReactNode
}

const ItemActionsPanel = () => {
	const [active, setActive] = useState(false)
	const [itemActions] = useState<IItemActions[]>([
		{
			title: 'Удалить Удалить Удалить',
			icon: <Active />
		},
		{
			title: 'Удалить',
			icon: <Active />
		},
		{
			title: 'Удалить',
			icon: <Active />
		}
	])
	return (
		<div className={s.itemPanel}>
			<div className={s.itemPanelLeft}>
				<span className={s.addButton} onClick={() => {}}>
					<PlusBlack />
				</span>
				<span className={s.activePanel} onClick={() => setActive(!active)}>
					{active ? <Active /> : <NotActive />}
				</span>
			</div>
			{active && (
				<>
					<div className={s.itemPanelCenter}>
						{itemActions.map(item => (
							<span className={s.itemAction}>
								{item.icon} {item.title}
							</span>
						))}
					</div>
					<div className={s.itemPanelRight}>
						<span onClick={() => setActive(false)} className={s.itemAction}>
							<GrayClose />
						</span>
					</div>
				</>
			)}
		</div>
	)
}

export default ItemActionsPanel
