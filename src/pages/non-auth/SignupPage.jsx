import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../../axios/auth';

const SignupPage = () => {
	const navigate = useNavigate();

	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [nickname, setNickname] = useState('');

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		try {
			const response = await authApi.login(id, password);
			navigate('/test');
		} catch (error) {
			console.log('sign up error', error);
		}
	};

	return (
		<div>
			<h1>Signup</h1>
			<p>Signup page</p>

			<form onSubmit={onSubmitHandler}>
				<div>
					<label htmlFor="id">id</label>
					<input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
				</div>
				<div>
					<label htmlFor="nickname">nickname</label>
					<input />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input />
				</div>

				<button type="submit">Signup</button>
				<button
					type="button"
					onClick={() => {
						navigate('/login');
					}}
				>
					로그인하러가기
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

export default SignupPage;
