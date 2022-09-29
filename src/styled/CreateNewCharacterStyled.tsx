import styled from "styled-components";
import backgroundTittle from "src/assets/background_tittle.jpg";

// Style components
export const CreateNewCharacterContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 2rem 0;
`;

export const CharacterNameStyle = styled.div`
	padding: 0.5rem;
	border-radius: 10px;
	position: relative;
	div:first-child {
		background-color: #fff;
		width: 115%;
		border: 1px solid;
	}
	input {
		border: none;
		padding: 4px;
		border-radius: 3px;
	}
	svg {
		position: absolute;
		top: 30%;
		right: -7%;
		font-size: 1.2rem;
	}
	.character_name_status {
		font-size: 1rem;
		color: red;
	}
`;
export const CharacterMainStyle = styled.div`
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
			}
		}
		.color_picker {
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
`;
// End Style Components
