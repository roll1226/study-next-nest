import { LOCAL_STORAGE_TYPE } from "@/consts/localStorage";

export const LocalStorages = {
  getAuthToken: () => {
    if (typeof window === "undefined") return;
    return localStorage.getItem(LOCAL_STORAGE_TYPE.AUTH_TOKEN);
  },

  setAuthToken: (token: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(LOCAL_STORAGE_TYPE.AUTH_TOKEN, token);
  },

  removeAuthToken: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(LOCAL_STORAGE_TYPE.AUTH_TOKEN);
  },
} as const;
