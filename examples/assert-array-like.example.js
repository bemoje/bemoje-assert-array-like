import assertArrayLike from '../src/assert-array-like'

assertArrayLike([])
//=> void

assertArrayLike(new Uint16Array())
//=> void

//assertArrayLike({})
//=> throw TypeError
