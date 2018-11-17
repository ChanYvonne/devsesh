// express for server-side methods
const express = require('express');
const bodyParser = require('body-parser');

// creates the application
const app = express();
// sets the port for the application
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

const whirlydoos = [];

app.get('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  res.status(200).send(whirlydoos);
});

app.post('/api/whirlydoos', (req, res) => {
  /* Implement API Call */
  const input = {
    "name": req.body.name,
    "skill": req.body.skill
  }
  whirlydoos.push(input);

  res.status(200).send(whirlydoos);
});

app.put('/api/whirlydoos/update/{id}', (req, res) => {
  /* Implement API Call */

  // whirlydoos = this.state.list.filter((item) =>  )

  for (const i = 0; i < whirlydoos.length; i++) {
    const item = whirlydoos[i];
    const update = req.body;
    if (item.name = update.name) {
      console.log(update);
      item.skill = update.skill;
    }
  }

  res.status(200).send(whirlydoos);
});

// listen for requests made to get /api/hello and post /api/world
app.listen(port, () => console.log(`Listening on port ${port}`));
