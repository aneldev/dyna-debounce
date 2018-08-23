# About

Simpler API for the lovely `lodash.debounce`.

Also, includes only the `debounce` and not the whole `lodash`.

Written in TypeScript, runs everywhere.

# dynaDebounce

    dynaDebounce = (func,           // the function to call
                    timeout,        // timeout in ms
                    config?: IDynaDebounceConfig {
                        leading?: boolean; // default: true       Set true to trigger on first call always.
                        maxWait?: number;  // default: undefined  Set the timeout for max wait, to call it anyway after this timeout.
                    }
    ) => Function


# Reference

[lodash.debounce](https://lodash.com/docs/4.17.10#debounce)