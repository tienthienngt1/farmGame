import CreateNewCharacter from "src/components/home/character/CreateNewCharacter";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "src/firebase/config";
import { collection, query, where } from "firebase/firestore";
import Dashboard from "src/components/home/home/Dashboard";
import { UserProps } from "src/types/user";
import Loading from "src/components/common/Loading";

const HomePage = (props: UserProps) => {
	const [value, loading] = useCollectionData(
		query(collection(db, "user"), where("email", "==", props.email))
	);
	return (
		<>
			{loading ? (
				<Loading />
			) : value?.[0] ? (
				<Dashboard {...props} />
			) : (
				<CreateNewCharacter {...props} />
			)}
		</>
	);
};

export default HomePage;
