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

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    app.get('/', (req, res) => {
        client.query(query, (err, results) => {
            if (err) {
                console.error(err);
                return;
            }
            res.json(results.rows)
        });
    });
});
app.listen(3000, () => console.log('Listening on port 3000..'));
