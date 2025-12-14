import { Navigate, Route, Routes } from 'react-router-dom';
import All from '../pages/All';
import Active from '../pages/Active';
import Completed from '../pages/Completed';

export const PATHS = {
	ALL: '/all',
	ACTIVE: '/active',
	COMPLETED: '/completed',
};

const MainRouter = () => (
	<Routes>
		<Route path="/" element={<Navigate replace to="/all" />}></Route>
		<Route path={PATHS.ALL} element={<All />}></Route>
		<Route path={PATHS.ACTIVE} element={<Active />}></Route>
		<Route path={PATHS.COMPLETED} element={<Completed />}></Route>
	</Routes>
);

export default MainRouter;
