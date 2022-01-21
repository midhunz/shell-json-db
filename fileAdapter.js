const fs = require('fs')

const write = (dbname, d) => {
  return fs.writeFileSync(dbname, JSON.stringify(d), (err) => {
    console.log(err)
  })
}

const read = (dbname) => {
  try {
    return fs.readFileSync(dbname, 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found!')
    } else {
      throw err
    }
    return null
  }
}

const mkdir = (dir) => {
  !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true })
}

module.exports = {
  write,
  read,
  mkdir,
}
