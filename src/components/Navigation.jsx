import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../axios/auth';

const Navigation = () => {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedin] = useState(false);

	const checkLogin = async () => {
		try {
			const response = await authApi.get('/login');
			if (response.data) {
				setIsLoggedin(true);
			}
		} catch (error) {
			console.log('check login Error', error);
		}
	};

	const checkLogout = async () => {
		try {
			await authApi.post('/logout');
			setIsLoggedin(false);
			navigate('/');
		} catch (error) {
			console.log('check logout Error', error);
		}
	};

	const handleLogin = () => {
		navigate('/login');
	};

	useEffect(() => {
		checkLogin();
	}, []);

	return (
		<nav>
			{/* 로그인 또는 로그아웃 버튼 */}
			<button onClick={checkLogout}>로그아웃</button>
			<button type="button" onClick={handleLogin}>
				로그인하러가기
			</button>
			<ul
				style={{
					listStyle: 'none',
					padding: 0,
					margin: 0,
				}}
			>
				<hr />

				{/* 로그인 여부가 상관없는 메뉴 */}
				<p>❗️ 로그인 여부가 상관없는 메뉴</p>
				<li>
					<Link to="/">홈 메뉴로</Link>
				</li>
				<li>
					<Link to="/search">검색페이지로</Link>
				</li>
				<li>
					<Link to="/test">권한테스트 페이지로</Link>
				</li>

				<hr />

				{/* 로그인이 반드시 필요한 메뉴 */}
				<p>❗️ 로그인이 반드시 필요한 메뉴</p>
				<li>
					<Link>1번 유저의 정보</Link>
				</li>
				<li>
					<Link>2번 유저의 정보</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
