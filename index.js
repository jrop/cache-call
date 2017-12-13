const co = require('co')
const fs = require('fs')
const exists = file => new Promise((y, n) => fs.exists(file, ex => y(ex)))
module.exports = (fileName, fn) =>
	co.wrap(function*(...args) {
		if (yield exists(fileName))
			return JSON.parse(yield done => fs.readFile(fileName, 'utf8', done))
		const results = yield fn.apply(this, args)
		yield done => fs.writeFile(fileName, JSON.stringify(results), done)
		return results
	})
