import { useState } from "react";
import Button from "src/components/common/Button";
import ReactNiceAvatar from "react-nice-avatar";
import { characterConfig } from "src/config/characterConfig";
import {
	CreateNewCharacterContainer,
	CharacterMainStyle,
} from "src/styled/CreateNewCharacterStyled";
import CharacterName from "./CharacterName";
import CharacterStyleSelection from "./CharacterStyleSelection";
import CharacterColorSelection from "./CharacterColorSelection";
import { BoxArrowRight } from "react-bootstrap-icons";
import { signOut } from "firebase/auth";
import { auth } from "src/firebase/config";
import { UserProps } from "src/types/user";
import { useGetName } from "../../../api/read";
import { insertUser } from "src/api/insert";

const CreateNewCharacter = (props: UserProps) => {
	const [config, setConfig] = useState<any>(characterConfig);
	const [color, setColor] = useState<string>("");
	const [colorConfig, setColorConfig] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [errorName, setErrorName] = useState<string | undefined>();
	const getNameDB = useGetName(name);
	const handleConfirm = async () => {
		const reg = new RegExp("^[a-zA-Z0-9]+$");
		if (reg.test(name)) {
			if (errorName) setErrorName(undefined);
			if (getNameDB?.[0]) return setErrorName("Username already exists!");
			const res = await insertUser(props, name);
			console.log(res);
		} else {
			setErrorName("Character name can't contain special character!");
		}
	};
	return (
		<>
			<BoxArrowRight
				style={{
					fontSize: "2rem",
					float: "right",
					margin: "1rem 2rem",
					cursor: "pointer",
				}}
				onClick={() => signOut(auth)}
			/>
			<CreateNewCharacterContainer>
				<CharacterName
					name={name}
					setName={setName}
					errorName={errorName}
				/>
				<ReactNiceAvatar
					{...config}
					className="avatar"
					shape="circle"
					style={{
						width: "10rem",
						height: "10rem",
						position: "sticky",
						top: "1rem",
					}}
				/>
				<CharacterMainStyle>
					<CharacterStyleSelection
						config={config}
						setConfig={setConfig}
					/>
					<CharacterColorSelection
						config={config}
						color={color}
						colorConfig={colorConfig}
						setConfig={setConfig}
						setColor={setColor}
						setColorConfig={setColorConfig}
					/>
				</CharacterMainStyle>
				<Button text="Confirm" onClick={handleConfirm} />
			</CreateNewCharacterContainer>
		</>
	);
};

export default CreateNewCharacter;
