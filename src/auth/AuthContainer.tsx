import React, { useLayoutEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/config";
import Loading from "src/components/common/Loading";
import { useNavigate } from "react-router-dom";

type Props = {
	children: React.ReactNode;
};

const AuthContainer: React.FC<Props> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	useLayoutEffect(() => {
		if (user) {
			navigate("/");
		} else {
			navigate("/login");
		}
	}, [user, navigate]);
	return <>{loading ? <Loading /> : children}</>;
};

export default AuthContainer;
