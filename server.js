const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })

    server.get('/townhomes', (req, res) => {
      return app.render(req, res, '/townhomes', req.query)
    })
    server.get('/apartments', (req, res) => {
      return app.render(req, res, '/apartments', req.query)
    })
    server.get('/lodge', (req, res) => {
      return app.render(req, res, '/lodge', req.query)
    })
    server.get('/neighborhood', (req, res) => {
      return app.render(req, res, '/neighborhood', req.query)
    })
    server.get('/blog', (req, res) => {
      return app.render(req, res, '/blog', req.query)
    })
    server.get('/contact', (req, res) => {
      return app.render(req, res, '/contact', req.query)
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Read on http://localhost:3000')
    })
  })

  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
