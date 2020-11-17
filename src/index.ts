// @ts-ignore
import * as debounce from "lodash.debounce";

export interface IDynaDebounceConfig {
  leading?: boolean; // default: true       Set true to trigger on first call always.
  maxWait?: number;  // default: undefined  Set the timeout for max wait, to call it anyway after this timeout.
}

export const dynaDebounce = (func: (args?: any[]) => any,
                             timeout: number,
                             config: IDynaDebounceConfig = {
                               leading: true,
                               maxWait: undefined,
                             },
) =>
  debounce(
    func,
    timeout,
    {
      leading: !!config.leading,
      maxWait: config.maxWait,
    }
  );
