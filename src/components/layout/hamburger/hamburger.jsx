import s from './hamburger.module.scss'
import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { Menu } from './Menu.jsx'

export const Hamburger = ({}) => {
	const [isShow, setIsShow] = useState(false)
	return <div className = {s.wrapper}>
		<button onClick = {() => {
			setIsShow(!isShow)
		}}>
			{isShow ? <IoClose color = "white" /> : <CgMenuRight color = "white" />}
		</button>
		<Menu isShow = {isShow} />
	</div>
}
