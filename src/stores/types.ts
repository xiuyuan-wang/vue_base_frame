// import NumFactoryStateTypes from '@/stores/modules/types.ts'
// console.log(NumFactoryStateTypes)
import type { AppStateTypes, SettingsStateTypes } from './modules/types.ts';

export interface RootStateTypes {
  text: string;
}

export interface AllStateTypes extends RootStateTypes {
  app: AppStateTypes;
  settings: SettingsStateTypes;
}
