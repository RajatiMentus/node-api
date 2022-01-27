const express = require('express');
const app = express();
const { Client } = require('pg')

const client = new Client({
    user: 'embfozspqrfijh',
    host: 'ec2-34-233-157-189.compute-1.amazonaws.com',
    database: 'datsnkculldhq8',
    password: '1b684cc99ee569bfc4cea476af5948f1f978e6419303ad227feecb64682b2576',
    port: 5432,
})

const query = 'SELECT "ID", "Text" FROM public."Question"';

client.connect();

app.get('/', (req, res) => {
 client.query(query, (err, results) => {
   if (err) {
      console.error(err);
      return;
   }
    res.json(results.rows);
  });
});
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
