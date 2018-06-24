# About

Simpler API for the lovely `lodash.debounce`.

Also, includes only the `debounce` and not the whole `lodash`.

Written in TypeScript, runs everywhere.

# dynaDebounce

    dynaDebounce = (func,           // the function to call
                    timeout,        // timeout in ms
                    callOnTimeout   // set it true to call it anyway on each timeout
    ) => Function

# Reference

[lodash.debounce](https://lodash.com/docs/4.17.10#debounce)