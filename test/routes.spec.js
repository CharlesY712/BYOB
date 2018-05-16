const chai = require('chai');
const should = chai.should();
const { app, database } = require('../server.js');
const chaiHttp = require('chai-http');

chai.use(chaiHttp)

describe('Endpoint tests', () => {

  beforeEach((done) => {
    database.migrate.rollback()
      .then(() => {
      database.migrate.latest()
      .then(() => {
        return database.seed.run()
      .then(() => {done()})
      })
    })
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
        done()
      })
  })

  it('should GET one state', (done) => {
    chai.request(app)
      .get('/api/v1/states/2')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.an('array')
        response.body.length.should.equal(1)
        response.body[0].should.have.property('state')
        response.body[0].state.should.equal('AK')
        response.body[0].should.have.property('numberOfStations')
        response.body[0].numberOfStations.should.equal(16)
        done()
      })
  })

  it('should GET all the cities', (done) => {
    chai.request(app)
      .get('/api/v1/cities')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.an('array')
        response.body.length.should.equal(50)
        response.body[0].should.have.property('city')
        response.body[0].city.should.equal('New York City')
        response.body[0].should.have.property('BD')
        response.body[0].BD.should.equal(1)
        response.body[0].should.have.property('CNG')
        response.body[0].CNG.should.equal(7)
        response.body[0].should.have.property('E85')
        response.body[0].E85.should.equal(0)
        response.body[0].should.have.property('ELEC')
        response.body[0].ELEC.should.equal(585)
        response.body[0].should.have.property('HY')
        response.body[0].HY.should.equal(0)
        response.body[0].should.have.property('LNG')
        response.body[0].LNG.should.equal(0)
        response.body[0].should.have.property('LPG')
        response.body[0].LPG.should.equal(1)
        done()
      })
  })

  it('should GET one city', (done) => {
    chai.request(app)
      .get('/api/v1/cities/2')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.an('array')
        response.body.length.should.equal(1)
        response.body[0].should.have.property('city')
        response.body[0].city.should.equal('Los Angeles')
        response.body[0].should.have.property('BD')
        response.body[0].BD.should.equal(0)
        response.body[0].should.have.property('CNG')
        response.body[0].CNG.should.equal(14)
        response.body[0].should.have.property('E85')
        response.body[0].E85.should.equal(0)
        response.body[0].should.have.property('ELEC')
        response.body[0].ELEC.should.equal(994)
        response.body[0].should.have.property('HY')
        response.body[0].HY.should.equal(1)
        response.body[0].should.have.property('LNG')
        response.body[0].LNG.should.equal(3)
        response.body[0].should.have.property('LPG')
        response.body[0].LPG.should.equal(9)
        done()
      })
  })





})