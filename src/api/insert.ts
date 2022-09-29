import { doc, setDoc } from "firebase/firestore";
import { UserProps } from "../types/user";
import { db } from "src/firebase/config";

export const insertUser = async (
	{ email, photoURL, displayName, uid }: UserProps,
	name: string
) => {
	try {
		const response = await setDoc(doc(db, "user", uid), {
			name,
			email,
			photoURL,
			displayName,
			uid,
		});
		return {
			status: true,
			data: response,
		};
	} catch (error) {
		console.log(error);
		return {
			status: false,
			data: error,
		};
	}
};
