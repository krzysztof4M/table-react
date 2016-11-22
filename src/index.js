import express from 'express'

let app = express()

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.listen(3000, function () {
  console.log('Server is running on port 3000!')
})