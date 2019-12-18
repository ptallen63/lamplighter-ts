/**
 * @author Paul Allen
 * @created 4-20-2019
 * @name Lamplighter
 * @description This a light debug library that allows you to log information to the console
 * but only if they debug flag is set
 *
 * Usuage:
 * -- Import the package --
 * import debug from 'path/to/service'
 *
 * -- Configure at the start of app --
 * debug.configure({key: 'key-for-localStorage'})
 *
 * -- Use in code --
 * // Almost All console functions are supported
 * debug.log("MY Message")
 * debug.warn("My Warning")
 * ... others
 *
 * -- Force --
 * // you can force a message to show even when debug is not enabled
 * debug.log({force: true}, "My Forced Message")
 *
 *
 * // TODO:
 * - [] Add support for color customizations
 * - [] Make a published npm pacakge
 * - [] support a configuration to expect other queryParam flags
 *
 */

import functions from "./functions";
import { setKey, checkDebugStatus } from "./configuration";

export default {
  configure({ key = "lampLighter" } = {}) {
    setKey(key);
    checkDebugStatus(key);
  },
  ...functions,
};

declare global {
  interface Window {
    __DEBUG: {
      [key: string]: any;
    };
  }
}
if (process.env.NODE_ENV === 'development') {

  window.__DEBUG = {
    configure({ key = "lampLighter" } = {}) {
      setKey(key);
      checkDebugStatus(key);
    },
    ...functions,
  }
}

