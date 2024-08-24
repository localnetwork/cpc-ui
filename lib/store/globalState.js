import { create } from "zustand";
export default create(() => ({
  showLazy: false,
  mainMenu: false,
  ready: false,
}));
