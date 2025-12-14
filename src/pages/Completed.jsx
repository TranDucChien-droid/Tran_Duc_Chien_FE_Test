import css from './Page.module.css';
import { useContext, useMemo } from 'react';
import { TodoContext } from '../App';
import Container from '../components/container/Container';
import TodoList from '../components/todo-list/TodoList';

export default function Completed() {
	const { list } = useContext(TodoContext);

	const displayList = useMemo(() => {
		return list.filter((item) => !!item.isDone);
	}, [list]);

	return (
		<Container>
			Completed
			<TodoList list={displayList} />
		</Container>
	);
}
