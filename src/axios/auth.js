import axios from 'axios';

const authApi = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

authApi.interceptors.request.use(
	function (config) {
		console.log('user 요청 성공!', config);
		return config;
	},
	function (error) {
		console.log('요청 에러!', error);
		return Promise.reject(error);
	}
);

authApi.interceptors.response.use(
	function (response) {
		console.log('user 응답 받음!', response);
		return response;
	},
	function (error) {
		console.log('응답 에러!', error);
		return Promise.reject(error);
	}
);

export default authApi;
