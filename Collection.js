const fs = require('fs')
const fileAdapter = require('./fileAdapter')
const { nanoid } = require('nanoid')

class Collection {
  #_p
  constructor(collection, path) {
    this.collection = collection
    this.#_p = path + '/' + collection
  }

  _findWithQuery(d, q) {
    const k = Object.keys(q)
    const v = Object.values(q)
 
    return d.filter(e =>{
      return e[k[0]] === v[0]
    })
  }

  find(q) {
      let data = fileAdapter.read(this.#_p)
      let d = JSON.parse(data)
      return d?q ? this._findWithQuery(d, q) : d:undefined
  }

  save(filed) {
    let d = this.find()
    filed._id = nanoid()
    if (d) d.push(filed)
    else d = [filed]
    fileAdapter.write(this.#_p, d)
  }

  delete(_id) {
    let d = this.find()
    if (d) {
      d = d.filter((e) => !(e._id === _id))

      fileAdapter.write(this.collection, d)
    }
  }

  deleteAll() {
    let d = this.find()
    d ? fileAdapter.write(this.collection, d) : null
  }
}

module.exports = Collection
