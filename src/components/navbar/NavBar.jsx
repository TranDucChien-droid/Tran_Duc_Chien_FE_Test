import css from './NavBar.module.css';
import LinkItem from './LinkItem';
import { PATHS } from '../../routes/MainRouter';

export default function NavBar() {
	
	return (
		<div className={css['container']}>
			<LinkItem linkName={'All'} to={PATHS.ALL} />
			<LinkItem linkName={'Active'} to={PATHS.ACTIVE} />
			<LinkItem linkName={'Completed'} to={PATHS.COMPLETED} />
		</div>
	);
}
