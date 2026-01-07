import { Navigate, Route, Routes } from 'react-router-dom';
import All from '../pages/All';
import Active from '../pages/Active';
import Completed from '../pages/Completed';

const BASE = '/Tran_Duc_Chien_FE_Test/';

export const PATHS = {
	ALL: `${BASE}all`,
	ACTIVE: `${BASE}active`,
	COMPLETED: `${BASE}completed`,
};

const MainRouter = () => (
	<Routes>
		<Route path="/" element={<Navigate replace to={PATHS.ALL} />} />
		<Route path={PATHS.ALL} element={<All />} />
		<Route path={PATHS.ACTIVE} element={<Active />} />
		<Route path={PATHS.COMPLETED} element={<Completed />} />
	</Routes>
);

export default MainRouter;
