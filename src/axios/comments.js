import axios from 'axios';
import { authApi } from './auth';

const commentsAxios = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

commentsAxios.interceptors.request.use(
	function (config) {
		console.log('코멘트 요청 성공!', config);
		return config;
	},
	function (error) {
		console.log('코멘트 요청 오류', error);
	}
);

commentsAxios.interceptors.response.use(
	function (response) {
		console.log('코멘트 응답 성공!', response);
		return response;
	},
	function (error) {
		console.log('코멘트 응답 오류', error);
	}
);

export default commentsAxios;
