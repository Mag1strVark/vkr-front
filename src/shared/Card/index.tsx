import s from './card.module.css'
import { ReactNode } from 'react'

export interface ICard {
	id: string
	title: string
	categoryName: string
	icon: ReactNode
	displayDescription?: boolean
	levelDeveloperName?: string
	authorName?: string
	description?: string
}

const Card = ({ displayDescription = false, ...props }: ICard) => {
	return (
		<div className={s.container}>
			<div className={s.title}>
				<div className={s.titleLeft}>
					<span className={s.titleLeftMain}>{props.title}</span>
					<span className={s.titleLeftAddition}>{props.categoryName}</span>
				</div>
				<div className={s.titleRightIcon}>{props.icon}</div>
			</div>
			{displayDescription && (
				<>
					<div className={s.middle}>
						<span className={s.middleText}>{props.levelDeveloperName}</span>
						<span className={s.middleText}>{props.authorName}</span>
					</div>
					<span className={s.description}>{props.description}</span>
				</>
			)}
		</div>
	)
}

export default Card
