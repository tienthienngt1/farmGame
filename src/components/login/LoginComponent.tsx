import styled from "styled-components";
import logo from "assets/logo.png";
import { Button } from "@mui/material";

type Props = {};

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	place-content: center;
`;
const ImageStyle = styled.div`
	img {
		width: 100%;
		height: 100%;
	}
`;

const ButtonStyle = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	button:first-child {
		margin-right: 0.5rem;
	}
	button {
		font-family: "Jua", sans-serif;
		font-family: "Sriracha", cursive;
		color: #000;
	}
`;

const TextStyle = styled.div`
	font-size: 2rem;
	display: flex;
	justify-content: center;
	margin: 2rem 0;
`;

const LoginComponent = (props: Props) => {
	return (
		<Container>
			<ImageStyle>
				<img src={logo} alt="logo_farm_game" />
			</ImageStyle>
			<TextStyle>
				<p>Login with</p>
			</TextStyle>
			<ButtonStyle>
				<Button variant="outlined">Login With Google</Button>
				<Button variant="outlined">Login With Facebook</Button>
			</ButtonStyle>
		</Container>
	);
};

export default LoginComponent;
