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

    return d.filter(e => {
      return e[k[0]] === v[0]
    })
  }

  find(q) {
    let data = fileAdapter.read(this.#_p)
    let d = JSON.parse(data)
    return d ? q ? this._findWithQuery(d, q) : d : undefined
  }

  save(field) {
    let d = this.find()
    if (!d) d = [];
    if (Array.isArray(field) && field.length > 0) {
      for (const e of field) {
        if (e._id) {
          const i = d.findIndex(de => de._id === e._id)
          d[i] = e;
        } else {
          e._id = nanoid();
          d.push(e)
        }
      }
    } else {
      if (field._id) {
        const i = d.findIndex(e => e._id === field._id)
        d[i] = field;
      } else {
        field._id = nanoid()
        d.push(field)
      }
    }
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
