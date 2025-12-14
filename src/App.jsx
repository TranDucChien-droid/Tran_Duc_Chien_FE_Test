import css from './App.module.css';
import MainRouter from './assets/MainRouter';
import NavBar from './components/NavBar';

function App() {
	return (
		<div className={css['main-container']}>
			<h1>#todo</h1>
			<div>
				<NavBar />
				<MainRouter />
			</div>
		</div>
	);
}

export default App;
