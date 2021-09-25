const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);
app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});

/* const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes')
app.use(express.json());
app.use('/api', api);
app.use('/', html);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


/* api
app.get('/api/notes',(req,res)=> {res.send(JSON.parse(fs.readFileSync('./db/db.json')))})
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);
const addNote = req.body; */

/*app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`)) */