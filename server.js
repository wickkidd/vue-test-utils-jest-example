const express              = require('express')
const webpack              = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app      = express()
const config   = require('./webpack.config.js');
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/message', (req, res) => res.send('Hello from express js!'))
app.use(express.static('.'))

app.listen(8081, () => console.log('Example app listening on port 8081!'))

