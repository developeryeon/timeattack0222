import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../../axios/auth';

const LoginPage = () => {
	const navigate = useNavigate();

	const [id, setId] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		try {
			const response = await authApi.login(id, password);
			navigate('/test');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<p>Login page</p>

			<form onSubmit={onSubmitHandler}>
				<div>
					<label htmlFor="id">id</label>
					<input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</div>

				<button type="submit">Login</button>
				<button
					type="button"
					onClick={() => {
						navigate('/signup');
					}}
				>
					회원가입하러가기
				</button>
				<button
					type="button"
					onClick={() => {
						navigate('/');
					}}
				>
					홈으로
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
