import styled from "styled-components";
import backgroundTittle from "src/assets/background_tittle.jpg";

// Style components
export const CreateNewCharacterContainer = styled.div`
	width: 100%;
	border: 1px solid black;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 2rem 0;
`;

export const CharacterNameStyle = styled.div`
	padding: 0.5rem;
	border: 2px solid #000;
	border-radius: 10px;
	margin-bottom: 2rem;
	position: relative;
	input {
		border: none;
		padding: 4px;
		border-radius: 3px;
	}
	svg {
		position: absolute;
		top: 30%;
		right: 5%;
		font-size: 1.2rem;
	}
`;
export const CharacterMainStyle = styled.div`
	border: 1px solid blue;
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	flex-flow: wrap;
	& > div {
		margin: 1.5px;
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
`;
export const CharacterStyle = styled.div`
	border: 1px solid blue;
	padding: 2px;
	font-size: 1.2rem;
	.character_style_collection {
		margin-top: 1rem;
		&_item {
			display: flex;
			justify-content: space-between;
			img {
				width: 2rem;
				height: 2rem;
				margin-left: 5px;
				cursor: pointer;
			}
			.item_color {
				width: 1.3rem;
				height: 1.3rem;
				cursor: pointer;
				border: 1px solid;
			}
		}
		.color_picker {
			border: 1px solid;
			display: flex;
			justify-content: center;
			span {
				width: 1.5rem;
				height: 1.9rem;
				cursor: pointer;
				background-color: antiquewhite;
				display: inline-block;
			}
		}
	}
`;

export const CharacterColorStyle = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	border: 1px solid blue;
`;
// End Style Components
