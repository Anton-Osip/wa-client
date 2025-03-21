import { Header } from './header/Header.jsx'
import cn from 'clsx'
import s from './Layout.module.scss'

export const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={cn(s.wrapper, {
				[s.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />

			{heading && <h1 className={s.heading}>{heading}</h1>}

			{children && <div>{children}</div>}
		</section>
	)
}
