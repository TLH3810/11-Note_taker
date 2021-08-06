const express = require('express');
const api = require('.routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))