import { auth } from "src/firebase/config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "src/components/common/Loading";
import { Navigate } from "react-router-dom";
import Button from "src/components/common/Button";
import CreateNewCharacter from "src/components/home/CreateNewCharacter";

const HomePage = () => {
	const [user, loading] = useAuthState(auth);
	return (
		<div>
			<CreateNewCharacter />
			<Button text="Logout" onClick={() => signOut(auth)} />
			<p>{user?.displayName}</p>
		</div>
	);
};

export default HomePage;
