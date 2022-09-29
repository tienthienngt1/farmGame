import { ArrowRepeat } from "react-bootstrap-icons";
import { CharacterNameStyle } from "src/styled/CreateNewCharacterStyled";
import names from "src/assets/names.json";

type Props = {
	name: string;
	errorName: string | undefined;
	setName: React.Dispatch<React.SetStateAction<string>>;
};

const CharacterName = ({ name, setName, errorName }: Props) => {
	return (
		<>
			<CharacterNameStyle>
				<div style={{ borderColor: errorName && "red" }}>
					<input
						className={errorName && "error_validate"}
						type="text"
						placeholder="Please enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<ArrowRepeat
					onClick={() =>
						setName(
							names[
								Math.floor(Math.random() * (names.length - 1))
							]
						)
					}
				/>
			</CharacterNameStyle>
			<div style={{ fontSize: "1rem", color: "red" }}>{errorName}</div>
		</>
	);
};

export default CharacterName;
