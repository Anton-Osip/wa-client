import { Layout } from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../ui/button/Button.jsx'
import s from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'

export const Home = () => {
	const navigate = useNavigate()
	const { isAuth } = useAuth()
	return (
		<Layout bgImage={'/images/home-bg.jpg'}>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'NEW' : 'Sign in'}
			</Button>
			<h1 className={s.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/*	TODO: COUNTERS*/}
		</Layout>
	)
}
