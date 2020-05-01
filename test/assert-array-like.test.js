import assertArrayLike from '../src/assert-array-like'

describe('assertArrayLike', () => {
	test('works', () => {
		expect(() => assertArrayLike(void 0)).not.toThrow(TypeError)
		expect(() => assertArrayLike([1, 2])).not.toThrow(TypeError)
		expect(() => assertArrayLike(new Uint16Array([1, 2]))).not.toThrow(
			TypeError,
		)
		expect(() => assertArrayLike({})).toThrow(TypeError)
	})
})
