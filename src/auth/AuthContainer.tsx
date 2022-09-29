import React, { Children, cloneElement, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/config";
import Loading from "src/components/common/Loading";
import { useNavigate } from "react-router-dom";
import { UserProps } from "src/types/user";

type Props = {
	children: React.ReactNode;
};

const AuthContainer: React.FC<Props> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (user) navigate("/");
		else navigate("/login");
	}, [user, navigate]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				Children.map(children, (child) =>
					cloneElement(
						child as React.ReactElement<any>,
						user as UserProps
					)
				)
			)}
		</>
	);
};

export default AuthContainer;
