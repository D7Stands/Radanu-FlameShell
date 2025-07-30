
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')))

// Route for '/'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Radanu FlameShell live on http://localhost:${port}`)
})
