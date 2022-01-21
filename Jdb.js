const fs = require('fs')
const fileAdapter = require('./fileAdapter')
const { nanoid } = require('nanoid')
const Collection = require('./Collection')

class Jdb {
  
  constructor(dbname) {
    this.dbname = dbname
    this.createDb()
  }

  getDbName(){
      return this.dbname;
  }
  createDb() {
    fileAdapter.mkdir(this.dbname)
  }

  createCollection(collection) {
      return new Collection(collection,this.dbname);
  }
}

module.exports = Jdb
