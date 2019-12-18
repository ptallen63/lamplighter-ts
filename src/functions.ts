import logFunc from "./utils/log-func";

/**
 * these functions look at the type of message coming in and use the correspoding
 * console function ex. log --> console.log
 * @param  {...any} messages // arguments to pass into the console function
 */
const log = (...messages: any[]) => logFunc({ type: "log" }, ...messages);
const warn = (...messages: any[]) => logFunc({ type: "warn" }, ...messages);
const table = (...messages: any[]) => logFunc({ type: "table" }, ...messages);
const group = (...messages: any[]) => logFunc({ type: "group" }, ...messages);
const error = (...messages: any[]) => logFunc({ type: "error" }, ...messages);
const groupEnd = (...messages: any[]) => logFunc({ type: "groupEnd" }, ...messages);
const info = (...messages: any[]) => logFunc({ type: "info" }, ...messages);
const groupCollapsed = (...messages: any[]) =>
  logFunc({ type: "groupCollapsed" }, ...messages);
const time = (...messages: any[]) => logFunc({ type: "time" }, ...messages);
const timeEnd = (...messages: any[]) => logFunc({ type: "timeEnd" }, ...messages);
const timeLog = (...messages: any[]) => logFunc({ type: "timeLog" }, ...messages);
const trace = (...messages: any[]) => logFunc({ type: "trace" }, ...messages);
const clear = (...messages: any[]) => logFunc({ type: "clear" }, ...messages);
const count = (...messages: any[]) => logFunc({ type: "count" }, ...messages);
const countReset = (...messages: any[]) =>
  logFunc({ type: "countReset" }, ...messages);

export default {
  log,
  warn,
  table,
  error,
  group,
  groupEnd,
  info,
  groupCollapsed,
  time,
  timeEnd,
  timeLog,
  trace,
  clear,
  count,
  countReset,
};
