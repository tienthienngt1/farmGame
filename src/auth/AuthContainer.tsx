import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/config";
import Loading from "src/components/common/Loading";
import { Navigate } from "react-router-dom";

type Props = {
	children: React.ReactNode;
};

const AuthContainer: React.FC<Props> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	return (
		<>
			{!user && loading ? (
				<Loading />
			) : !user ? (
				<Navigate to="/login" replace={true} />
			) : (
				<Navigate to="/" replace={true} />
			)}
			{children}
		</>
	);
};

export default AuthContainer;
