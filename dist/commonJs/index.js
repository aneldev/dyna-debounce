"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynaDebounce = void 0;
// @ts-ignore
var debounce = require("lodash.debounce");
exports.dynaDebounce = function (func, timeout, config) {
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