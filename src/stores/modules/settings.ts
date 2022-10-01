import type SettingsStateTypes from "./types";

const state = {
  showSettings: true,
  fixedHeader: true,
  sidebarLogo: true,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit("CHANGE_SETTING", data);
  },
};
const settings: Module<SettingsStateTypes> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default settings;
