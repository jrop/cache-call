# cache-call

> Cache a function call to a JSON file

Useful for the following development scenarios:

* During development, for calls to the DB that load huge tables, but you want to iterate during development quickly
* ...more!

## Installation

```sh
npm install cache-call
```

## Use

Convert this:

```js
async function someLongRunningOperationThatReturnsJSON() {
	// ...
}
async function main() {
	// ... do stuff ...
	await someLongRunningOperationThatReturnsJSON()
	// ... do more stuff ...
}
```

To this:

```js
import cacheCall from 'cache-call'
const someLongRunningOperationThatReturnsJSON =
	cacheCall(__dirname + '/results.json', async function () {
		// ...
	})
async function main() {
	// ... do stuff ...
	await someLongRunningOperationThatReturnsJSON()
	// ... do more stuff ...
}
```

## License (ISC)

ISC License (ISC)
Copyright 2017 <jrapodaca@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
