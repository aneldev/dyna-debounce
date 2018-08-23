declare let jasmine: any, describe: any, expect: any, it: any;

import {dynaDebounce} from "../../src";

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('dyna debounce test', () => {

	it('should trigger only one with one call', (done: Function) => {
		let counter: number = 0;
		const myFunction = () => counter++;
		const myDebounceFunction = dynaDebounce(myFunction, 500);

		setTimeout(() => {
			myDebounceFunction();
		}, 500);

		setTimeout(() => {
			expect(counter).toBe(1);
			done();
		}, 1200);
	});

	it('should trigger only one in intensive calls', (done: Function) => {
		let counter: number = 0;
		let times: number = 0;
		const myFunction = () => counter++;
		const myDebounceFunction = dynaDebounce(myFunction, 1500);

		const intervalHandler = setInterval(() => {
			myDebounceFunction();
			times++;
			if (times === 100) clearInterval(intervalHandler);
		}, 10);

		setTimeout(() => {
			expect(counter).toBe(1);
			done();
		}, 1200);
	});

	it('should trigger only many times in intensive calls', (done: Function) => {
		let counter: number = 0;
		let times: number = 0;
		const myFunction = () => counter++;
		const myDebounceFunction = dynaDebounce(myFunction, 200, {maxWait: 200});

		const intervalHandler = setInterval(() => {
			myDebounceFunction();
			times++;
			if (times === 100) clearInterval(intervalHandler);
		}, 10);

		setTimeout(() => {
			console.debug('counter', counter);
			expect(counter > 1).toBe(true);
			done();
		}, 1200);
	});

});
