import Checkbox from '../../components/checkbox/Checkbox';
import css from './TodoList.module.css';
import trashIcon from '../../assets/trash-icon.svg';
import classNames from 'classnames';

export default function TodoItem({
	id,
	name,
	isActive,
	onActiveChange,
	onRemoveClick,
}) {
	const onCheckboxChange = () => {
		if (onActiveChange) {
			onActiveChange(id);
		}
	};

	const onDeleteClick = () => {
		if (onRemoveClick) {
			onRemoveClick(id);
		}
	};

	return (
		<div className={css['item-container']}>
			<div>
				<Checkbox onChange={onCheckboxChange} checked={isActive} />
				<span className={classNames({ [css['item-span']]: isActive })}>
					{name}
				</span>
			</div>
			{onRemoveClick ? (
				<button onClick={onDeleteClick}>
					<img className={css['delete']} src={trashIcon} />
				</button>
			) : null}
		</div>
	);
}
