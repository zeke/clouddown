const requireDir = require('require-dir')
const download = require('download')
const path = require('path')
const {get} = require('lodash')
const fs = require('fs')

const fileDir = path.join(__dirname, 'files')
const files = Object.values(requireDir('./metadata'))
  // .slice(0,10)

downloadFile()

function downloadFile(i = 0) {
  const file = files[i]

  function next () {
    if (i < files.length - 1) {
      downloadFile(i+1)
    } else {
      process.exit()
    }
  }
  
  // ignore files that are not images
  if (!file.thumbs) return next()

  const thumb = file.thumbs.find(thumb => thumb.size.width === 3000)
  
  if (!thumb) return next()

  const url = thumb.url
  const thumbFilename = url
    .replace('https://cldup.com/', '')
    .replace('https:/i.cloudup.com/', '')
    .replace('https://i.cloudup.com/', '')
  const oldName = path.join(fileDir, thumbFilename)
  const newName = path.join(fileDir, file.filename)
  const date = new Date(file.created_at).getTime()/1000|0

  // skip if already downloaded
  if (fs.existsSync(newName)) {
    console.log(`${newName} (exists; skipping)`)
    return next()
  } 

  download(url, fileDir).then(() => {
    console.log(newName)

    fs.renameSync(oldName, newName)
    fs.utimesSync(newName, date, date)
    next()
  })
}
