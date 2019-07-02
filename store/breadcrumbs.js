export const state = () => ({
	items: [
		{ text: 'home', url: '/', disabled: false }
	]
});

export const mutations = {
	set (state, items) {
		state.items = items || [{ text: 'home', url: '/', disabled: false }];
	}
}

export const getters = {
	
}