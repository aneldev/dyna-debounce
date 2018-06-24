import * as debounce from "lodash.debounce";

export const dynaDebounce = (func: (args?: any[]) => any,
                             timeout: number,
                             callOnTimeout: boolean = true,
) => debounce(func, timeout, {leading: true, maxWait: callOnTimeout ? timeout : undefined});