import { BrowserRouter } from "react-router-dom";
import RoutesRoot from "src/routes/RoutesRoot";
import AuthContainer from "./auth/AuthContainer";

function App() {
	return (
		<BrowserRouter>
			<AuthContainer>
				<RoutesRoot />
			</AuthContainer>
		</BrowserRouter>
	);
}

export default App;
