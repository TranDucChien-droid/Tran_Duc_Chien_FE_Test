import { useCallback, useContext, useTransition } from 'react';
import TodoItem from './TodoItem';
import css from './TodoList.module.css';
import { TodoContext } from '../../App';

export default function TodoList({ list, onRemoveClick }) {
	const [, startTransition] = useTransition();
	const { list: currentList, setList } = useContext(TodoContext);

	const onActiveChange = useCallback(
		(id) => {
			startTransition(() => {
				const payload = [...currentList].map((item) => {
					if (item.id === id) {
						return { ...item, isActive: !item.isActive };
					}
					return item;
				});
				setList(payload);
			});
		},
		[currentList]
	);

	return (
		<div className={css['container']}>
			{list.map((item) => (
				<TodoItem
					key={item.id}
					onRemoveClick={onRemoveClick}
					onActiveChange={onActiveChange}
					{...item}
				/>
			))}
		</div>
	);
}
