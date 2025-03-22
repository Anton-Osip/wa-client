import s from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'
import { FiArrowLeft } from 'react-icons/fi'
import { Hamburger } from '../hamburger/hamburger.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { SlUser } from 'react-icons/sl'

export const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()
	return (
		<header className={s.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<FiArrowLeft color={'#fff'} fontSize={30} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<SlUser color={'#fff'} fontSize={25} />
				</button>
			)}

			<Hamburger />
		</header>
	)
}
