import s from './hamburger.module.scss'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { Menu } from './Menu.jsx'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside.js'

export const Hamburger = () => {
	const { isShow, setIsShow, ref } = useOnClickOutside(false)

	return (
		<div className={s.wrapper} ref={ref}>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}
