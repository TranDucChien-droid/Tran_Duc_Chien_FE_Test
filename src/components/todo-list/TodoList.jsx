import css from './TodoList.module.css';

export default function TodoList({ list }) {
	return (
		<div
		// className={css['container']}
		>
			{list.map((item) => (
				<>{JSON.stringify(item)}</>
			))}
		</div>
	);
}
