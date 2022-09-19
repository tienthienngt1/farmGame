import LoginPage from "pages/LoginPage";
import { Route, Routes } from "react-router-dom";

const RoutesRoot = () => {
	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
		</Routes>
	);
};

export default RoutesRoot;
