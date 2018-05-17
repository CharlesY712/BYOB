const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.set('secretKey', 'delinquents');

app.locals.title = 'BYOB';

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`); // eslint-disable-line
});

const checkAuth = (request, response, next) => {
  const { token } = request.headers;
  const cert = app.get('secretKey');
  
  if (token) {
    jwt.verify(token, cert, (err, decoded) => {
      if (!decoded) {
        return response.status(403).json('Invalid Token');
      } else {
        if (decoded.admin) {
          next();
        } else {
          return response.status(403).json('You do not have admin privileges');
        }
      }
    });
  } else {
    return response.status(403)
      .json({message: 'You must be authorized to hit this endpoint.'});
  }
};

app.get('/', (req, res) => {
  res.send('HIIIII!!!!!');
});

app.get('/api/v1/states', (req, res) => {
  const stationQuery = req.param('numberOfStations');

  if (stationQuery) {
    database('states').where('numberOfStations', stationQuery).select()
      .then(states => {
        if (states.length) {
          return res.status(200).json(states);
        } else {
          return res.status(404).json('No results matching your request.');
        }
      })
      .catch(err => {
        return res.status(500).json({err});
      });  
  } else {
    database('states').select()
      .then(states => {
        return res.status(200).json(states);
      })
      .catch(err => {
        return res.status(500).json({err});
      });
  }
});

app.get('/api/v1/states/:id', (req, res) => {
  database('states').where('id', req.params.id).select()
    .then(state => {
      if (state.length) {
        return res.status(200).json(state);
      } else {
        return res.status(404).json('Cannot find state id');
      }
    })
    .catch(err => {
      return res.status(500).json({err});
    });
});

app.get('/api/v1/cities', (req, res) => {
  database('cities').select()
    .then(cities => {
      return res.status(200).json(cities);
    })
    .catch(err => {
      return res.status(500).json({err});
    });
});

app.get('/api/v1/cities/:id', (req, res) => {
  database('cities').where('id', req.params.id).select()
    .then(city => {
      if (city.length) {
        return res.status(200).json(city);
      } else {
        return res.status(404).json('City id not found.');
      }
    })
    .catch(err => {
      return res.status(500).json({err});
    });
});

app.post('/api/v1/states', checkAuth, (req, res) => {
  
  const state = req.body;

  for (let requiredParameter of ['state', 'numberOfStations']) {
    if (!state[requiredParameter]) {
      return res.status(422)
        .send(`You are missing a ${requiredParameter}`);
    }
  }

  database('states').insert(state, 'id')
    .then(state => {
      return res.status(201)
        .json(`Successfully added state with id ${state} to database.`);
    })
    .catch(err => {
      return res.status(500).json({err});
    });
});

app.post('/api/v1/cities', checkAuth, (req, res) => {
  const city = req.body;

  for (let requiredParameter of
    ['city', 'BD', 'CNG', 'E85', 'ELEC', 'HY', 'LNG', 'LPG']) {
    if (!city[requiredParameter]) {
      return res.status(422)
        .send(`You are missing a ${requiredParameter}`);
    }
  }

  database('cities').insert(city, 'id')
    .then(city => {
      return res.status(201)
        .json(`Successfully added city with id ${city} to database.`);
    })
    .catch(err => {
      return res.status(500).json({err});
    });
});

app.patch('/api/v1/states/:id', checkAuth, (req, res) => {
  const state = req.body;

  if (state.state || state.numberOfStations) {
    database('states').where('id', req.params.id).update(state)
      .then(stateResponse => {
        return res.status(200).json({stateResponse});
      })
      .catch(err => {
        return res.status(500).json({err});
      });
  } else {
    return res.status(422)
      .send('You dont have the correct parameters.');
  }
});

app.patch('/api/v1/cities/:id', checkAuth, (req, res) => {
  const city = req.body;

  if (city.city || city.BD || city.CNG || city.E85 || 
    city.ELEC || city.HY || city.LNG || city.LPG ) {
    database('cities').where('id', req.params.id).update(city)
      .then(cityResponse => {
        return res.status(200).json({cityResponse});
      })
      .catch(err => {
        return res.status(500).json({err});
      });
  } else {
    return res.status(422)
      .send('You dont have the correct parameters.');
  }
});

app.delete('/api/v1/states/:id', checkAuth, (req, res) => {
  database('states').where('id', req.params.id).del()
    .then(deleteCount => {
      if (deleteCount === 0) {
        return res.status(422).json({error: 'no state found with that id'});
      }
      return res.status(204).json({deleteCount});
    })
    .catch(err => {
      return res.status(500).json({err});
    });
});

app.delete('/api/v1/cities/:id', checkAuth, (req, res) => {
  database('cities').where('id', req.params.id).del()
    .then(deleteCount => {
      if (deleteCount === 0) {
        return res.status(422).json({error: 'no city found with that id'});
      }
      return res.sendStatus(204);
    })
    .catch(err => {
      return res.status(500).json({err});
    });
});

app.post('/authenticate', (request, response) => {
  const {email, appName} = request.body;

  if (email && appName) {
    if (email.includes('turing.io')) {
      const token = jwt.sign({email, appName, admin: true}, 
        app.get('secretKey'), {expiresIn: '1hr'});

      return response.status(201).json({token});
    } else {
      const token = jwt.sign({email, appName, admin: false}, 
        app.get('secretKey'), {expiresIn: '1hr'});

      return response.status(201).json({token});
    }
  } else {
    response.status(404).json('You dont have the correct parameters.');
  }
});

module.exports = { database, app};