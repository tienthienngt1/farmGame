import styled from "styled-components";
import logo from "src/assets/logo.png";
import { Facebook, Google } from "react-bootstrap-icons";
import {
	useSignInWithFacebook,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "src/firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "src/components/common/Button";

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
		display: flex;
		align-items: center;
	}
`;

const TextStyle = styled.div`
	font-size: 2rem;
	display: flex;
	justify-content: center;
	margin: 2rem 0;
`;

const LoginComponent = (props: Props) => {
	const navigate = useNavigate();
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);
	const [signInWithFacebook, userF] = useSignInWithFacebook(auth);
	useEffect(() => {
		if (user || userF) navigate("/");
	}, [user, userF, navigate]);
	return (
		<Container>
			<ImageStyle>
				<img src={logo} alt="logo_farm_game" />
			</ImageStyle>
			<TextStyle>
				<p>Login with</p>
			</TextStyle>
			<ButtonStyle>
				<Button
					text="Google"
					icon={<Google />}
					onClick={() => signInWithGoogle()}
				/>
				<Button
					text="Facebook"
					icon={<Facebook />}
					onClick={() => signInWithFacebook()}
				/>
			</ButtonStyle>
		</Container>
	);
};

export default LoginComponent;
