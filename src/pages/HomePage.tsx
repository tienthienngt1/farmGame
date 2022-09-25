import { auth } from "src/firebase/config";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "src/components/common/Loading";
import { Navigate } from "react-router-dom";

const HomePage = () => {
	const [user, loading] = useAuthState(auth);
	return (
		<div>
			<Button variant="outlined" onClick={() => signOut(auth)}>
				Logout
			</Button>
			<p>{user?.displayName}</p>
		</div>
	);
};

export default HomePage;
