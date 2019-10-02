const express    = require('express')
const path       = require('path')
const bodyParser = require('body-parser')
const fetch      = require('node-fetch')
const md5        = require('js-md5')
const marvelApi = require('../resources/config/config')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Marvel
const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + marvelApi.privateKey + marvelApi.publicKey)

const fechtApi = (url, currentOffset = 0, limit = 20) => {
  const urlApi = `${url}?limit=${limit}&ts=${timestamp}&offset=${currentOffset}&orderBy=name&apikey=${marvelApi.publicKey}&hash=${hash.hex()}`

  return fetch(urlApi)
  .then((response) => {
    return response.json()
  })
}

app.get('/api/allcharacter', (req, res) => {
  fechtApi(marvelApi.baseUrl)
  .then(function(response) {
    res.send({ response })
  })
  .catch(function(error) {
    throw `An error has occured ${ error }`
  })
})

app.get('/api/bycharacter', (req, res) => {
  const URI = `${marvelApi.baseUrl}/${req.headers.id}`

  fechtApi(URI)
  .then(function(response) {
    res.send({ response })
  })
  .catch(function(error) {
    throw `An error has occured ${ error }`
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('resources/dist'))

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'resources','dist','index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
