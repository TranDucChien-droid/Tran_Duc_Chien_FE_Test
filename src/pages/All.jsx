import css from './Page.module.css';
import { useContext, useMemo } from 'react';
import { TodoContext } from '../App';
import Container from '../components/container/Container';
import TodoList from '../components/todo-list/TodoList';

export default function All() {
	const { list } = useContext(TodoContext);

	const displayList = useMemo(() => list, [list]);

	return (
		<Container>
			All
			<TodoList list={displayList} />
		</Container>
	);
}
