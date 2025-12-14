import css from './NavBar.module.css';
import LinkItem from './LinkItem';
import { useEffect } from 'react';

export default function NavBar() {
	useEffect(() => {}, []);

	return (
		<div className={css['container']}>
			<LinkItem linkName={'All'} to="/all" />
			<LinkItem linkName={'Active'} to="/active" />
			<LinkItem linkName={'Completed'} to="/completed" />
		</div>
	);
}
