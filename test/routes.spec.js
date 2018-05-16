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







})