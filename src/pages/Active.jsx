import css from './Page.module.css';
import { useCallback, useContext, useMemo, useRef, useTransition } from 'react';
import { TodoContext } from '../App';
import Container from '../components/container/Container';
import TodoList from './todo-list/TodoList';
import TaskInput from '../components/field-input/TaskInput';
import Button from '../components/button/Button';

export default function Active() {
	const [, startTransition] = useTransition();
	const { list, setList } = useContext(TodoContext);

	const txtRef = useRef(null);

	const displayList = useMemo(() => {
		const data = [...list];
		return data.filter((item) => !item.isActive);
	}, [list]);

	const onInputChange = (ev) => {
		txtRef.current = ev.target.value;
		console.log('ev.target.value', ev.target.value);
	};

	const handleAdd = useCallback(() => {
		const payload = [...list];
		const data = {
			id: 6,
			name: txtRef.current,
			isActive: false,
		};
		startTransition(() => {
			payload.unshift(data);
			setList(payload);
		});
	}, [list, setList]);

	return (
		<Container>
			<div className={css['input-container']}>
				<TaskInput placeholder="Add details" onChange={onInputChange} />
				<Button text={'Add'} onClick={handleAdd} />
			</div>
			<TodoList list={displayList} />
		</Container>
	);
}
