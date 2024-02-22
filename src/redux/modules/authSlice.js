// const initialState = {
// 	users: {
// 		userId: localStorage.getItem('userId'),
// 		nickname: localStorage.getItem('nickname'),
// 	},
// 	isLogin: !!localStorage.getItem('accessToken'),
// 	error: null,
// };

// const authSlice = createSlice({
// 	name: 'auth',
// 	initialState,
// 	reducers: {
// 		login: (state, action) => {
// 			state.users = action.payload;
// 		},
// 		logout: (state, action) => {
// 			localStorage.removeItem('userId');
//       localStorage.removeItem('nickname');
//       localStorage.removeItem('userId');
// 			state.users = {};
// 			state.isLogin = false;
// 		},
// 	},
// });
