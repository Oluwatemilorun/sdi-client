export const state = () => ({
	toggle: true
});

export const mutations = {
	toggle (state, val) {
		state.toggle = !state.toggle;
	}
}