import css from './Page.module.css';
import {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useTransition,
} from 'react';
import { TodoContext } from '../App';
import Container from '../components/container/Container';
import TodoList from './todo-list/TodoList';
import Button from '../components/button/Button';

export default function Completed() {
	const [, startTransition] = useTransition();
	const { list, setList } = useContext(TodoContext);

	const displayList = useMemo(() => {
		const data = [...list];
		return data.filter((item) => !!item.isActive);
	}, [list]);

	const handleRemoveAll = useCallback(() => {
		startTransition(() => {
			const payload = [...list].filter((item) => !item.isActive);
			setList(payload);
		});
	}, [list]);

	const onRemoveClick = useCallback(
		(id) => {
			startTransition(() => {
				const payload = [...list].filter((item) => item.id !== id);
				setList(payload);
			});
		},
		[list]
	);

	return (
		<Container>
			{!(displayList && displayList.length) ? (
				'Empty'
			) : (
				<>
					<TodoList
						list={displayList}
						onRemoveClick={onRemoveClick}
					/>
					<div className={css['delete-container']}>
						<Button
							text={'Remove all'}
							color="red"
							onClick={handleRemoveAll}
						/>
					</div>
				</>
			)}
		</Container>
	);
}
