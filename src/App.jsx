import { createContext, useState } from 'react';
import css from './App.module.css';
import MainRouter from './routes/MainRouter';
import NavBar from './components/navbar/NavBar';
import { mock } from './mock/mock';
import { Outlet } from 'react-router-dom';

export const TodoContext = createContext(null);

function App() {
	const [list, setList] = useState(mock);

	const todoContextValue = {
		list,
		setList,
	};

	return (
		<div className={css['main-container']}>
			<h1>#todo</h1>
			<div className={css['inner-container']}>
				<TodoContext.Provider value={todoContextValue}>
					<NavBar />
					<MainRouter />
				</TodoContext.Provider>
			</div>
		</div>
	);
}

export default App;
