// import { getTokenFromCookie, getUserFromLocalStorage } from '~/utils/auth';
// import axios from '~/plugins/axios';

// export default async ({ isServer, store, req, error }) => {
// 	try {
// 		// If nuxt generate, pass this middleware		
// 		if (isServer && !req) return;
// 		else if (!isServer && !req) return;
// 		else {
// 			if (req.url.includes("/admin")) return;

// 			// const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage();
// 			const token = getTokenFromCookie(req);
			
// 			if (token) {
// 				console.log('user logged in');
				
// 				let { data } = await axios.get('/api/user/profile', { withCredentials: true, headers: { 'x-access-token': token } });
// 				if (data.state == 'OK') {
// 					store.commit('user/setUser', data.payload, true);
// 				}
// 				else {
// 					store.commit('user/setUser', null, false);
// 				}
// 			}
// 			else {
// 				store.commit('user/setUser', null, false);
// 			}
// 		}
// 	} catch (e) {
// 		console.log(e);
// 		let { response, message } = e;
// 		if (response.status == 403) return;
// 		else error({ statusCode: 400, message: 'Bad request' });
// 	}
// }