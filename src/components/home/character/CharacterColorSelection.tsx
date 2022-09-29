import { useState } from "react";
import { ChromePicker } from "react-color";
import { characterColorList } from "src/config/characterConfig";
import { CharacterStyle } from "src/styled/CreateNewCharacterStyled";

type Props = {
	config: any;
	color: string;
	colorConfig: string;
	setColorConfig: React.Dispatch<React.SetStateAction<string>>;
	setColor: React.Dispatch<React.SetStateAction<string>>;
	setConfig: React.Dispatch<React.SetStateAction<string>>;
};

const CharacterColorSelection = ({
	config,
	setConfig,
	setColorConfig,
	setColor,
	color,
	colorConfig,
}: Props) => {
	const [isDisplayPicker, setDisplayPicker] = useState<boolean>(false);
	return (
		<>
			<CharacterStyle>
				<div className="character_tittle">Color</div>
				<div className="character_style_collection">
					{characterColorList.map((style) => (
						<div
							key={style.title}
							className="character_style_collection_item"
						>
							<div>{style.title}:</div>
							<div
								className="item_color"
								style={{
									backgroundColor: config[style.config],
								}}
								onClick={() => {
									setColorConfig(style.config);
									setDisplayPicker(true);
									setColor(config[style.config]);
								}}
							></div>
						</div>
					))}
					{isDisplayPicker ? (
						<div className="color_picker">
							<ChromePicker
								color={color}
								onChange={(color) => {
									setColor(color.hex);
									setConfig({
										...config,
										[colorConfig]: color.hex,
									});
								}}
							/>
							<span
								onClick={() => {
									setColor("");
									setDisplayPicker(false);
									setColorConfig("");
								}}
							>
								X
							</span>
						</div>
					) : (
						""
					)}
				</div>
			</CharacterStyle>
		</>
	);
};

export default CharacterColorSelection;
