import Vue from 'vue';
const state = {
	msg : 'hello.js'
};
const mutations = {
	save(state,obj) {
		localStorage.setItem('login',obj.user);
		location.href = '/d'
	},
	get(state,obj) {
		if(localStorage.getItem('login')) {
			return true;
		}
		return false;
	},
	remove(state, obj) {
		localStorage.removeItem('login');
	}
}
export default {
	state,
	mutations
};
