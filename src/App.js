import React from "react";
import SignUp from "./components/SignUp.js";
import LogIn from "./components/LogIn.js";
import { Routes, Route } from "react-router-dom"
const App = () => {
	return (
		<div>
		<Routes>
		<Route path="/" element={<SignUp/>} />
		<Route path="/LogIn" element={<LogIn/>} />
		</Routes>
		</div>
		)
};
export default App;