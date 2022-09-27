import Button from "../common/Button";
import ReactNiceAvatar from "react-nice-avatar";
import {
	characterConfig,
	characterStyleList,
} from "../../config/characterConfig";
import {
	CreateNewCharacterContainer,
	CharacterColorStyle,
	CharacterMainStyle,
	CharacterNameStyle,
	CharacterStyle,
} from "src/styled/CreateNewCharacterStyled";
import { useState } from "react";
type Props = {};
const CreateNewCharacter = (props: Props) => {
	const [config, setConfig] = useState<any>(characterConfig);
	console.log(config);
	return (
		<CreateNewCharacterContainer>
			<CharacterNameStyle>
				<input type="text" placeholder="Please enter your name" />
			</CharacterNameStyle>
			<ReactNiceAvatar
				{...config}
				className="avatar"
				shape="circle"
				style={{
					width: "10rem",
					height: "10rem",
				}}
			/>
			<CharacterMainStyle>
				<CharacterStyle>
					<div className="character_tittle">Style</div>
					<div className="character_style_collection">
						{characterStyleList.map((style) => (
							<div
								key={style.title}
								className="character_styled_collection_item"
							>
								<div>{style.title}:</div>
								<div>
									{style.img.map((s) => (
										<img
											key={s.alt}
											src={s.url}
											alt={s.alt}
											onClick={() =>
												setConfig({
													...config,
													...s.config,
												})
											}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</CharacterStyle>
				<CharacterColorStyle>
					<div className="character_tittle">Color</div>
					<div className="character_color_collection"></div>
				</CharacterColorStyle>
			</CharacterMainStyle>
			<Button text="Confirm" />
		</CreateNewCharacterContainer>
	);
};

export default CreateNewCharacter;

// note
// woman = {
//     "sex": "woman",
//   "faceColor": "#F9C9B6",
//   "earSize": "small",
//   "eyeStyle": "oval",
//   "noseStyle": "short",
//   "mouthStyle": "peace",
//   "shirtStyle": "hoody",
//   "glassesStyle": "none",
//   "hairColor": "#77311D",
//   "hairStyle": "womanShort",
//   "hatStyle": "none",
//   "hatColor": "#506AF4",
//   "eyeBrowStyle": "up",
//   "shirtColor": "#6BD9E9",
//   "bgColor": "linear-gradient(45deg, #176fff 0%, #68ffef 100%)"
// }
