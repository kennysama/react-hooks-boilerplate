import { ERouterPath } from "../../types";
import { INITIAL_LOGGED_IN, IUser } from "../../types/user";

const EMAIL = "TOKEN";
const DISPLAY_NAME = "TEMPO_CODE";
const PHOTO_URL = "User_CODE";
const TOKEN = "MANAGER_FLAG";
const ALL_KEYS = [TOKEN, EMAIL, DISPLAY_NAME, PHOTO_URL];

export function getToken(): string {
  if (!hasToken()) {
    return "";
  }

  const cookies = getCookieObject();
  const cookie = cookies[TOKEN] ? cookies[TOKEN] : "";
  return cookie;
}

export function getLoggedInUser(): IUser {
  const cookies = getCookieObject();
  return {
    email: cookies[EMAIL] ? cookies[EMAIL] : INITIAL_LOGGED_IN.email,
    displayName: cookies[DISPLAY_NAME]
      ? cookies[DISPLAY_NAME]
      : INITIAL_LOGGED_IN.displayName,
    photoURL: cookies[PHOTO_URL]
      ? cookies[PHOTO_URL]
      : INITIAL_LOGGED_IN.photoURL,
    token: cookies[TOKEN] ? cookies[TOKEN] : INITIAL_LOGGED_IN.token,
  };
}

export function deleteCookieStore() {
  ALL_KEYS.forEach((key) => {
    document.cookie = `${key}=null; max-age=0`;
  });
}

export function setToken(token: string): void {
  document.cookie = `${TOKEN}=${token}; path=/; max-age=${getMaxAge()}`;
}

export function setLoggedInUser(data: IUser) {
  document.cookie = `${EMAIL}=${data.email}; path=/; max-age=${getMaxAge()}`;
  document.cookie = `${DISPLAY_NAME}=${
    data.displayName
  }; path=/; max-age=${getMaxAge()}`;
  document.cookie = `${PHOTO_URL}=${
    data.photoURL
  }; path=/; max-age=${getMaxAge()}`;
  document.cookie = `${TOKEN}=${data.token}; path=/; max-age=${getMaxAge()}`;
}

export function resetCookie(): void {
  const cookies = getCookieObject();
  ALL_KEYS.forEach((key) => {
    const value = cookies[key] ? cookies[key] : "";
    document.cookie = `${key}=${value}; path=/; max-age=${getMaxAge()}`;
  });
}

export function hasToken(): boolean {
  const cookies = getCookieObject();
  if (cookies.hasOwnProperty(TOKEN)) {
    return true;
  }
  return false;
}

export function isLoggedIn(): boolean {
  if (hasToken()) {
    return true;
  }
  return false;
}

export function canDisplayLink(path: ERouterPath): boolean {
  switch (path) {
    case ERouterPath.login:
      return true;
    default:
      if (hasToken()) {
        return true;
      }
      return false;
  }
}

function getMaxAge(): string {
  return (1 * 60 * 6).toString();
}

function getCookieObject(): any {
  const ret: any = {};
  const cookies = document.cookie.split(/; ?/);
  cookies.forEach((cookie) => {
    const tmp = cookie.split("=");
    ret[tmp[0]] = tmp[1];
  });

  return ret;
}
