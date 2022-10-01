import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { RootStateTypes, AllStateTypes } from "./types";
import getters from "./getters";
import app from "./modules/app";
import settings from "./modules/settings";
import user from "./modules/user";

export const store = createStore<RootStateTypes>({
  state: {
    text: "",
  },
  getters,
  mutations: {},
  actions: {},
  modules: {
    app,
    settings,
    user,
  },
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol("vue-store");

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
