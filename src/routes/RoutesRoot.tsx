import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

const RoutesRoot = () => {
	return (
		<Routes>
			<Route path="/Login" element={<LoginPage />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};

export default RoutesRoot;
