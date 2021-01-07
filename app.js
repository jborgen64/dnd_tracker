const express = require('express');
const path = require('path');

const app = express();

//routey routes
app.get('/', (req, res) => res.send('howdy'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server listening on port ${PORT}`));