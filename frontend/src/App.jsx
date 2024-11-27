import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>

			<Route path="/auth" element={<AuthLayout />}>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
			</Route>
		</Routes>
	);
};

export default App;
