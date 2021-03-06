const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express(); // create express app
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 5000;

// add middlewares
const root = require('path').join(__dirname, 'build');
app.use(express.static(root));

// app.use('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get("/api/express_backend", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// start express server on port 5000
app.listen(port, () => {
  console.log('Running HTTP on ', port);
});
