import { useCollectionData } from "react-firebase-hooks/firestore";
import { query, collection, where } from "firebase/firestore";
import { db } from "src/firebase/config";
export const useGetName = (name: string) => {
	const [value, error] = useCollectionData(
		query(collection(db, "user"), where("name", "==", name))
	);
	if (error) return error;
	return value;
};
