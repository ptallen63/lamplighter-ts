import pkg from "../package.json";
import getQueryParamsFromUrl from "./utils/get-query-params-from-url";

type lampLighterFunc = () => string;

declare global {
  interface Window {
    lampLighter: lampLighterFunc;
  }
}

/**
 * This function set the state of the debug
 * @param { Boolean } state Is Debug on or off
 * @param { String } key the key in local storage that stores the state
 */

const _setDebugflag = (state: string, key: string) => {
  if (typeof window === `undefined`) return null;
  return Boolean(state) === false
    ? window.localStorage.removeItem(key)
    : window.localStorage.setItem(key, state);
};

/**
 * This function checks to see if a param  of "Debug is set"
 */
const _checkParamFlag = () => {
  if (typeof window === "undefined") return null;
  const params = getQueryParamsFromUrl(window.location.href);
  if (params.debug === "true" || params.debug === "1") return true;
  if (params.debug === "false" || params.debug === "0") return false;
  return null;
};

/**
 * Store the string of the localStorage key
 * @param {String} key
 */
export const setKey = (key: string) => {
  if (typeof window !== `undefined`) window.debugKey = key;
};

/**
 * Check debug status from localStorage
 * @param {String} key
 */
const _checkLocalStorage = (key: string) => {
  if (typeof window !== `undefined` && window.localStorage) {
    return window.localStorage.getItem(key) === "true";
  }

  return;
};

/**
 * Check the debug status from both the param and localStorage
 * @param {String} key
 */
export const checkDebugStatus = (key: string) => {
  if (_checkParamFlag() === false) return _setDebugflag('false', key);
  if (_checkParamFlag() || _checkLocalStorage(key)) {
    if (window) {
      window.lampLighter = (): string =>
        `Lamplighter: v${pkg.version}\n \nThe Cones of Dunshire is the ninth-highest-selling multi-player figurine-based strategy fantasy sequel game in history`;
    }
    return _setDebugflag('true', key);
  }
};

export default {
  checkDebugStatus,
  setKey,
};
