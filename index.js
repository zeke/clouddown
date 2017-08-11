require('dotenv-safe').load()

const Cloudup = require('cloudup-client')
const fs = require('fs')
const path = require('path')
const {pick} = require('lodash')
const mkdirp = require('make-dir').sync
const client = new Cloudup({
  user: process.env.EMAIL,
  pass: process.env.PASSWORD
})
let files = []

getPage()

function getPage (page = 1) {
  const opts = {
    page: page
  }
  client.streams(opts, (err, streams, nextPage) => {
    if (err) throw err

    streams.forEach((stream, i) => {
      stream.items((err, items) => {
        if (typeof items === 'undefined' || !items) return

        items.forEach((item, j) => {
          const {id, stream_id} = item
          const filename = path.join(__dirname, `metadata/${stream_id}---${id}.json`)

          if (fs.existsSync(filename)) {
            console.log(`${filename} (exists, skipping)`)
          } else {
            fs.writeFileSync(filename, JSON.stringify(item, null, 2))
            console.log(filename)
          }

          if (i === streams.length - 1 && j === items.length - 1) {
            if (nextPage) {
              console.log('nextPage')
              getPage(nextPage)
            } else {
              console.log('done')
            }
          }
        })
      })      
    })
  })
}
