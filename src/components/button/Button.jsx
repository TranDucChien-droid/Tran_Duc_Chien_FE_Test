import css from './Button.module.css';

import classNames from 'classnames';

export default function Button({ text = 'Button', color = 'blue', ...props }) {
	return (
		<button
			type="button"
			className={classNames(
				css['btn'],
				`rounded-md bg-${color}-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`
			)}
			{...props}
		>
			{text}
		</button>
	);
}
