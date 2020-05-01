import isArrayLike from '@bemoje/is-array-like';
import isUndefined from '@bemoje/is-undefined';
import throwTypeError from '@bemoje/throw-type-error';

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

export default assertArrayLike;
