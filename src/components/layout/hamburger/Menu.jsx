import cn from 'clsx'
import s from './hamburger.module.scss'
import { menu } from './menu.data.js'
import { Link } from 'react-router-dom'

export const Menu = ({ isShow }) => {
	const handleLogout = () => {}

	return (
		<nav className={cn(s.menu, { [s.show]: isShow })}>
			<ul>
				{menu.map((item, index) => (
					<li key={`menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
