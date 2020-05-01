(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-array-like'), require('@bemoje/is-undefined'), require('@bemoje/throw-type-error')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-array-like', '@bemoje/is-undefined', '@bemoje/throw-type-error'], factory) :
	(global = global || self, global['assert-array-like'] = factory(global.isArrayLike, global.isUndefined, global.throwTypeError));
}(this, (function (isArrayLike, isUndefined, throwTypeError) { 'use strict';

	isArrayLike = isArrayLike && Object.prototype.hasOwnProperty.call(isArrayLike, 'default') ? isArrayLike['default'] : isArrayLike;
	isUndefined = isUndefined && Object.prototype.hasOwnProperty.call(isUndefined, 'default') ? isUndefined['default'] : isUndefined;
	throwTypeError = throwTypeError && Object.prototype.hasOwnProperty.call(throwTypeError, 'default') ? throwTypeError['default'] : throwTypeError;

	/**
	 * Throw TypeError if not a value is array-like. The undefined value always evaluates to true.
	 * @param {*} value - The value
	 * @returns {void}
	 */
	function assertArrayLike(value) {
		if (isUndefined(value)) {
			return true
		}

		if (!isArrayLike(value)) {
			throwTypeError(Array, value);
		}
	}

	return assertArrayLike;

})));
