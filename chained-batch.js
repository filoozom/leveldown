const util = require('util')
const AbstractChainedBatch = require('abstract-leveldown').AbstractChainedBatch

function ChainedBatch (db) {
  AbstractChainedBatch.call(this, db)
  this.binding = db.binding.batch()
}

ChainedBatch.prototype._put = function (key, value) {
  this.binding.put(key, value)
}

ChainedBatch.prototype._del = function (key) {
  this.binding.del(key)
}

ChainedBatch.prototype._clear = function () {
  this.binding.clear()
}

ChainedBatch.prototype._write = function (options, callback) {
  this.binding.write(callback)
}

util.inherits(ChainedBatch, AbstractChainedBatch)

module.exports = ChainedBatch
