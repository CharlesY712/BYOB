const chai = require('chai');
const should = chai.should();
const {
  app,
  database
} = require('../server.js');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp)


describe('Endpoint tests', () => {
  let token;

  beforeEach((done) => {
    database.migrate.rollback()
      .then(() => {
        database.migrate.latest()
          .then(() => {
            return database.seed.run()
              .then(() => {
                done()
              })
          })
      })
    token = jwt.sign({
      email: 'r@turing.io',
      appName: 'test',
      admin: true
    }, app.get('secretKey'))
  })

  it('should GET all the states', (done) => {
    chai.request(app)
      .get('/api/v1/states')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.an('array')
        response.body.length.should.equal(50)
        response.body[0].should.have.property('state')
        response.body[0].state.should.equal('AL')
        response.body[0].should.have.property('numberOfStations')
        response.body[0].numberOfStations.should.equal(331)
        done();
      })
  })

  it('should create a new token with admin set to true', (done) => {
    chai.request(app)
      .post('/authenticate')
      .send({
        email: 'r@turing.io',
        appName: 'test',
        admin: true
      }, app.get('secretKey'))
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.token.should.be.a('string');
      })
    done();
  });

  it('should create a different token with admin set to false', (done) => {
    chai.request(app)
      .post('/authenticate')
      .send({
        email: 'r@r.io',
        appName: 'test',
        admin: false
      }, app.get('secretKey'))
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.token.should.be.a('string');
      })
    done();
  });

  it('should throw a 404 error when missing params', (done) => {
    chai.request(app)
      .post('/authenticate')
      .send({
        admin: true
      }, app.get('secretKey'))
      .end((err, response) => {
        response.should.have.status(404);
        response.body.should.be.a('string');
      })
    done();
  });

  it('should create a new state', (done) => {
    chai.request(app)
      .post('/api/v1/states')
      .set('token', token)
      .send({
        state: 'putins russia',
        numberOfStations: '10'
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('string');
      })
    done();
  });

  it('should error when missing a state param', (done) => {
    chai.request(app)
      .post('/api/v1/states')
      .set('token', token)
      .end((err, response) => {
        response.should.have.status(422);
        response.body.should.be.a('object');
      })
    done();
  });

  it('should create a new city', (done) => {
    chai.request(app)
      .post('/api/v1/cities')
      .set('token', token)
      .send({
        city: 'magic land',
        BD: '1',
        CNG: '2',
        E85: '3',
        ELEC: '4',
        HY: '5',
        LNG: '6',
        LPG: '7',
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('string');
      })
    done();
  });

  it('should error if missing a cities param', (done) => {
    chai.request(app)
      .post('/api/v1/cities')
      .set('token', token)
      .send({
        city: 'magic land'
      })
      .end((err, response) => {
        response.should.have.status(422);
        response.body.should.be.a('string');
      })
      .catch(err => {
        throw err;
      });
    done();
  it('should PATCH a state in states DB if it has state in body', (done) => {
    chai.request(app)
      .patch('/api/v1/states/9')
      .set('token', token)
      .send({
        state: 'WI'
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a state in states DB if it has numberOfStations in body', (done) => {
    chai.request(app)
      .patch('/api/v1/states/9')
      .set('token', token)
      .send({
        numberOfStations: '29'
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should not PATCH a state in states DB if incorrect ID', (done) => {
    chai.request(app)
      .patch('/api/v1/states/923524352435')
      .set('token', token)
      .send({
        numberOfStations: 43
      })
      .end((err, response) => {
        response.should.have.status(500)
        done();
      })
  });

  it('should not PATCH a state in states DB if neither state or numberOfStations in body', (done) => {
    chai.request(app)
      .patch('/api/v1/states/9')
      .set('token', token)
      .send({})
      .end((err, response) => {
        response.should.have.status(422)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has city in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        city: 'Moscow'
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has BD in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        BD: 4
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has CNG in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        CNG: 4
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has E85 in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        E85: 4
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has ELEC in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        ELEC: 4
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has HY in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        HY: 4
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has LNG in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        LNG: 4
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should PATCH a city in cities DB if it has LPG in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({
        LPG: 4
      })
      .end((err, response) => {
        response.should.have.status(200)
        done();
      })
  });

  it('should not PATCH a city in cities DB if incorrect ID', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9235252345')
      .set('token', token)
      .send({
        LPG: 4
      })
      .end((err, response) => {
        response.should.have.status(500)
        done();
      })
  });

  it('should not PATCH a city in cities DB if it doesnt have city, BD, CNG, E85, ELEC, HY, LNG, or LPG in body', (done) => {
    chai.request(app)
      .patch('/api/v1/cities/9')
      .set('token', token)
      .send({})
      .end((err, response) => {
        response.should.have.status(422)
        done();
      })
  });

  it('should DELETE state from states DB', (done) => {
    chai.request(app)
      .delete('/api/v1/states/1')
      .set('token', token)
      .end((error, response) => {
        response.should.have.status(204);
        done();
      })
  });

  it('should not DELETE state from states DB when wrong ID is sent', (done) => {
    chai.request(app)
      .delete('/api/v1/states/987234')
      .set('token', token)
      .end((error, response) => {
        response.should.have.status(422);
        done();
      })
  });

  it('should not DELETE state from states DB no ID is sent', (done) => {
    chai.request(app)
      .delete('/api/v1/states/bob')
      .set('token', token)
      .end((error, response) => {
        response.should.have.status(500);
        done();
      })
  });

  it('should DELETE a city from cities DB', (done) => {
    chai.request(app)
      .delete('/api/v1/cities/25')
      .set('token', token)
      .end((error, response) => {
        response.should.have.status(204);
        done();
      })
  });

  it('should not DELETE city from cities DB when wrong ID is sent', (done) => {
    chai.request(app)
      .delete('/api/v1/cities/987234')
      .set('token', token)
      .end((error, response) => {
        response.should.have.status(422);
        done();
      })
  });
});