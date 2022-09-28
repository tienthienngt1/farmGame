import { useState } from "react";
import Button from "../common/Button";
import ReactNiceAvatar from "react-nice-avatar";
import {
	characterConfig,
	characterStyleList,
} from "../../config/characterConfig";
import {
	CreateNewCharacterContainer,
	CharacterMainStyle,
	CharacterNameStyle,
	CharacterStyle,
} from "src/styled/CreateNewCharacterStyled";
import { characterColorList } from "../../config/characterConfig";
import { ChromePicker } from "react-color";
import { ArrowRepeat } from "react-bootstrap-icons";
import names from "src/assets/names.json";

const CreateNewCharacter = () => {
	const [config, setConfig] = useState<any>(characterConfig);
	const [color, setColor] = useState<string>("");
	const [isDisplayPicker, setDisplayPicker] = useState<boolean>(false);
	const [colorConfig, setColorConfig] = useState<string>("");
	const [name, setName] = useState<string>("");
	return (
		<CreateNewCharacterContainer>
			<CharacterNameStyle>
				<input
					type="text"
					placeholder="Please enter your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<ArrowRepeat
					onClick={() =>
						setName(names[Math.floor(Math.random() * names.length)])
					}
				/>
			</CharacterNameStyle>
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
				<CharacterStyle>
					<div className="character_tittle">Style</div>
					<div className="character_style_collection">
						{characterStyleList.map((style) => (
							<div
								key={style.title}
								className="character_style_collection_item"
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
			</CharacterMainStyle>
			<Button text="Confirm" />
		</CreateNewCharacterContainer>
	);
};

export default CreateNewCharacter;
