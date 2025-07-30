const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/live', (req, res) => {
  res.sendFile(__dirname + '/public/telx-session.html');
});

app.listen(port, () => {
  console.log(`Radanu FlameShell live on http://localhost:${port}`);
});
