import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import TestPage from '../pages/TestPage';
import LoginPage from '../pages/non-auth/LoginPage';
import SignupPage from '..//pages/non-auth/SignupPage';
import Detail from '../pages/auth/Detail';
import { useState } from 'react';

export default function RouterPage() {
	const [isLogin, setIsLogin] = useState(false);
	return (
		<Router>
			<Routes>
				{isLogin ? (
					<Route>
						<Route path="/test" element={<TestPage />} />
						<Route path="/detail/:id" element={<Detail />} />
					</Route>
				) : (
					<Route>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/login" element={<SignupPage />} />
						<Route path="/search" element={<SearchPage />} />
					</Route>
				)}

				{/* 404 Not Found */}
				<Route />
			</Routes>
		</Router>
	);
}
