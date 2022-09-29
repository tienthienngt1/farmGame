import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

const RoutesRoot = (props: any) => {
	return (
		<Routes>
			<Route path="/Login" element={<LoginPage />} />
			<Route path="/" element={<HomePage {...props} />} />
		</Routes>
	);
};

export default RoutesRoot;
