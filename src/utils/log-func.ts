declare global {
  interface Window {
    debugKey: string;
  }
  interface Console {
    [key: string]: any; // Add index signature
  }
}

/**
 * Check to see if debug is enabled
 */
const _isDebugEnabled = () => {
  if (typeof window !== `undefined` && window.localStorage) {
    return window.localStorage.getItem(window.debugKey) === "true";
  }
  return false;
};

/**
 * This is the main log function that will only fire if debug is enabled or
 * if the force flag is thrown through the first object
 */
interface Options {
  type: string
  [U: string]: any
}


const logFunc = ({ type = "log" }: Options, ...messages: Array<any>) => {
  if (messages.length === 0) return console[type]();
  if (messages[0].force) {
    return console[type](...messages.slice(1));
  }
  if (!_isDebugEnabled() && !messages[0].force) return;
  if (messages) console[type](...messages);
};

export default logFunc;
