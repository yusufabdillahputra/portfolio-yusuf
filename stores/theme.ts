import type { DaisyTheme } from "~/types";

export const DARK_THEME: string = "dark";
export const LIGHT_THEME: string = "light";
export const useDaisyTheme = defineStore("daisyTheme", {
  state: (): DaisyTheme => ({
    theme: LIGHT_THEME,
  }),
  persist: true,
  actions: {
    reset() {
      this.theme = LIGHT_THEME;
    },
    setTheme(theme: string) {
      if ([DARK_THEME, LIGHT_THEME].includes(theme)) {
        this.theme = theme;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDaisyTheme, import.meta.hot));
}
