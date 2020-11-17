// @ts-ignore
import * as debounce from "lodash.debounce";
export var dynaDebounce = function (func, timeout, config) {
    if (config === void 0) { config = {
        leading: true,
        maxWait: undefined,
    }; }
    return debounce(func, timeout, {
        leading: !!config.leading,
        maxWait: config.maxWait,
    });
};
//# sourceMappingURL=index.js.map