# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(?)
O(1)
Space complexity: O(?)
O(1)
Justification: .push takes an element, then pushes that to the top of the array's stack,
regardless of the length of arr.

[push on MDN][push]

## `arr.pop()`

Time complexity: O(?)
O(1)
Space complexity: O(?)
O(1)
Justification: Similar to .push, the operation is constant time and space, since
the operation happens at the top of the array stack, regarless of size.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(?)
O(1)
Space complexity: O(?)
O(1)
Justification: Same as pop, but with the top of the stack being the first element in the array.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(?)
O(1)
Space complexity: O(?)
O(1)
Justification: Same as pop, but with the top of the stack being the first element in the array.
[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: Since this is resizing an array, in the worst case scenario, a new
array would need to be created of size n + the spliced items.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: Worst case, this is copying the items from the original array.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: Iterates through the array until it finds item, then returns index.
Worst case it needs to check each item in the array.

[indexOf on MDN][indexof]

## `arr.map()`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: callback is invoked on each (n) item.

[map on MDN][map]

## `arr.filter()`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: callback is invoked on each (n) item.

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: callback is invoked on each (n) item.

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: Makes a copy of n array in reverse order, which simplifies to O(n)

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(?)
O(n)
Space complexity: O(?)
O(n)
Justification: iterates through array

[spread on MDN][spread]

[push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
