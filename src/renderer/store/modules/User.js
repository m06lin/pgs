const state = {
  userData: {},
};

const mutations = {
  setUserData(state, data) {
    state.userData = data;
  },
  clearUserData(state) {
    state.userData = {};
  },
};

const actions = {
  USER_SET: (context, userData) => {
    context.commit('setUserData', userData);
  },
  USER_CLEAR: (context) => {
    context.commit('clearUserData');
  },
};

export default {
  state,
  mutations,
  actions,
};
