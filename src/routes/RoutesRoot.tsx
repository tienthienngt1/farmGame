import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/config";
import Loading from "src/components/common/Loading";

const RoutesRoot = () => {
	const [user, loading] = useAuthState(auth);
	console.log(user);

	return (
		<Routes>
			<Route path="/Login" element={<LoginPage />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};

export default RoutesRoot;
