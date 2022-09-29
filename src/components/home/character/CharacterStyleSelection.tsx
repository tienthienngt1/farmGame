import React from "react";
import { characterStyleList } from "src/config/characterConfig";
import { CharacterStyle } from "src/styled/CreateNewCharacterStyled";

type Props = {
	config: any;
	setConfig: React.Dispatch<React.SetStateAction<string>>;
};

const CharacterStyleSelection = ({ config, setConfig }: Props) => {
	return (
		<>
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
		</>
	);
};

export default CharacterStyleSelection;
