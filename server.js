const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

app.locals.title = 'BYOB';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
})

app.get('/', (req, res) => {
  res.send('HIIIII!!!!!')
})

app.get('/api/v1/states', (req, res) => {
  database('states').select()
  .then(states => {
    return res.status(200).json({states})
  })
  .catch(err => {
    return res.status(500).json({err})
  })
})

app.get('/api/v1/states/:id', (req, res) => {
  database('states').where('id', req.params.id).select()
  .then(state => {
    if (state.length){
      return res.status(200).json({state})
    } else {
      return res.status(404).json('Cannot find state id')
    }
  })
  .catch(err => {
    return res.status(500).json({err})
  })
})

app.get('/api/v1/cities', (req, res) => {
  database('cities').select()
    .then(cities => {
      return res.status(200).json({cities})
    })
    .catch(err => {
      return res.status(500).json({err})
    })
})

app.get('/api/v1/cities/:id', (req, res) => {
  database('cities').where('id', req.params.id).select()
    .then(city => {
      if (city.length){
        return res.status(200).json({city})
      } else {
        return res.status(404).json('City id not found.')
      }
    })
    .catch(err => {
      return res.status(500).json({err})
    })
})