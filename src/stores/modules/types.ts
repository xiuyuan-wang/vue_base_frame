interface Sidebar {
  opened: Boolean;
  withoutAnimation: Boolean;
}

export interface AppStateTypes {
  sidebar: Sidebar;
  device: Boolean;
}

export interface SettingsStateTypes {
  showSettings: Boolean;
  fixedHeader: Boolean;
  sidebarLogo: Boolean;
}

export interface UserStateTypes {
  token: string;
  name: string;
  avatar: string;
}
