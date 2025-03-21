import s from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'
import { FiArrowLeft } from 'react-icons/fi'
import { Hamburger } from '../hamburger/hamburger.jsx'

export const Header = ({ backLink }) => {
	// TODO: react router useHistory
	const { isAuth } = useAuth()
	return (
		<header className={s.header}>
			<button onClick={() => {}}>
				<FiArrowLeft color={'#fff'} fontSize={30} />
			</button>
			<Hamburger />
		</header>
	)
}
