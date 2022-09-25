import styled from "styled-components";

const LoadingStyle = styled.div`
	width: 5rem;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	div {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: #ffffff;
	}

	div:nth-of-type(1) {
		transform: translateX(-100%);
		animation: left-swing 0.5s ease-in alternate infinite;
	}

	div:nth-of-type(3) {
		transform: translateX(-95%);
		animation: right-swing 0.5s ease-out alternate infinite;
	}

	@keyframes left-swing {
		50%,
		100% {
			transform: translateX(95%);
		}
	}

	@keyframes right-swing {
		50% {
			transform: translateX(-95%);
		}
		100% {
			transform: translateX(100%);
		}
	}
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	place-content: center;
`;

type Props = {};

const Loading = (props: Props) => {
	return (
		<Container>
			<LoadingStyle>
				<div></div>
				<div></div>
				<div></div>
			</LoadingStyle>
		</Container>
	);
};

export default Loading;
