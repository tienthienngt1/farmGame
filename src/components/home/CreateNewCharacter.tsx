import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import backgroundTittle from "src/assets/background_tittle.jpg";

const Container = styled.div`
	width: 100%;
	border: 1px solid black;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 2rem 0;
`;

const CharacterNameStyle = styled.div`
	padding: 0.5rem;
	border: 2px solid #000;
	border-radius: 10px;
	input {
		border: none;
		padding: 4px;
		border-radius: 3px;
	}
`;
const CharacterMainStyle = styled.div`
	border: 1px solid blue;
	display: flex;
	justify-content: center;
	margin: 3rem 0;
	& > div {
		width: 300px;
		text-align: center;
		.character_tittle {
			width: 100%;
			font-size: 1.4rem;
			background-image: url(${backgroundTittle});
			display: inline-block;
			padding: 5px;
			color: #fff;
			border-radius: 5px;
		}
	}
	.hair_collection,
	.skin_collection {
		width: 10rem;
		margin-top: 1rem;
	}
`;
const CharacterHairStyle = styled.div`
	height: 15rem;
	border: 1px solid blue;
	display: flex;
	flex-direction: column;
	align-items: center;
	.hair_collection {
		display: grid;
		height: 10rem;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 2px;
		&_item {
			border-radius: 5px;

			background-color: blue;
		}
	}
`;
const CharacterStyle = styled.div`
	border: 1px solid blue;
`;
const CharacterSkinColorStyle = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	border: 1px solid blue;
	.skin_collection {
		aspect-ratio: 4;
		display: grid;

		grid-template-columns: repeat(4, 1fr);
		gap: 2px;
		&_item {
			background-color: black;
			border-radius: 5px;
		}
	}
`;

type Props = {};

const CreateNewCharacter = (props: Props) => {
	return (
		<Container>
			<CharacterNameStyle>
				<input type="text" placeholder="Please enter your name" />
			</CharacterNameStyle>
			<CharacterMainStyle>
				<CharacterHairStyle>
					<div className="character_tittle">Hair Style</div>
					<div className="hair_collection">
						<div className="hair_collection_item"></div>
						<div className="hair_collection_item"></div>
						<div className="hair_collection_item"></div>
						<div className="hair_collection_item"></div>
					</div>
				</CharacterHairStyle>
				<CharacterStyle></CharacterStyle>
				<CharacterSkinColorStyle>
					<div className="character_tittle">Skin Color</div>
					<div className="skin_collection">
						<div className="skin_collection_item"></div>
						<div className="skin_collection_item"></div>
						<div className="skin_collection_item"></div>
						<div className="skin_collection_item"></div>
					</div>
				</CharacterSkinColorStyle>
			</CharacterMainStyle>
			<Button text="Confirm" />
		</Container>
	);
};

export default CreateNewCharacter;
