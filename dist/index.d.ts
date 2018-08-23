export interface IDynaDebounceConfig {
    leading?: boolean;
    maxWait?: number;
}
export declare const dynaDebounce: (func: (args?: any[]) => any, timeout: number, config?: IDynaDebounceConfig) => any;
