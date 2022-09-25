import styled from "styled-components";
type Props = {
	text: string;
	icon?: JSX.Element;
	onClick?: () => void;
};

const ButtonStyle = styled.button`
	p {
		margin-left: 0.5rem;
	}
`;

const Button = (props: Props) => {
	return (
		<ButtonStyle className="button" onClick={props.onClick}>
			{props.icon}
			<p>{props.text}</p>
		</ButtonStyle>
	);
};

export default Button;
