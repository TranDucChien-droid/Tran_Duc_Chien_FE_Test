import css from './Page.module.css';
import { useContext, useMemo } from 'react';
import { TodoContext } from '../App';
import Container from '../components/container/Container';
import TodoList from '../components/todo-list/TodoList';

export default function Active() {
	const { list } = useContext(TodoContext);

	const displayList = useMemo(() => {
		return list.filter((item) => !!item.isActive);
	}, [list]);

	return (
		<Container>
			Active
			<TodoList list={displayList} />
		</Container>
	);
}
