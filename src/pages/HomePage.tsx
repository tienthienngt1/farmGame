import { auth } from "src/firebase/config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "src/components/common/Button";
import CreateNewCharacter from "src/components/home/CreateNewCharacter";

const HomePage = () => {
	const [user] = useAuthState(auth);
	return (
		<div>
			<CreateNewCharacter />
			<Button text="Logout" onClick={() => signOut(auth)} />
			<p>{user?.displayName}</p>
		</div>
	);
};

export default HomePage;
