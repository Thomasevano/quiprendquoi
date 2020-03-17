const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');
var methodOverride = require('method-override')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', function(req, res) {
  res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch((err) => res.send(err));
});

app.get('/party/:id', function(req, res) {
  console.log(req.params.id)
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render('party', {
        party: data,
        title: data.name,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
      }),
    )
    .catch((err) => console.log(err))
});

app.post('/party/:id/items', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch((err) => res.send(err))
});

app.delete('/party/:id/items/:idItem', function(req, res) {
  axios
    .delete(`${process.env.API_URL}/party/${req.params.id}/items/${req.params.idItem}`)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch((err) => res.send(err))
})

app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));
app.set('view engine', 'pug');