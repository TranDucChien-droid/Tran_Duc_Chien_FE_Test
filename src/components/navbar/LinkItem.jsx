import css from './NavBar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function LinkItem({ linkName, to }) {
	const { pathname } = useLocation();
    
	return (
		<NavLink to={to}>
			<p
				className={classNames({
					[css['btn']]: true,
					[css['btn-choosen']]: pathname === to,
				})}
			>
				{linkName}
			</p>
		</NavLink>
	);
}
