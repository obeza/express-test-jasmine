const request = require('supertest');
const server = require('../index.js');

describe('Server', () => {
  describe('REST API v1', () => {
    it('retourne la liste des users', (done) => {
      request(server)
        .get('/api/user')       
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect( {
          msg : 'helloll'
        })
        .expect(200, done);
    });

    it('tenter de creer un user sans data', (done) => {
      request(server)
        .post('/api/user' , {json: true, body: {}})
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(400)
        .expect(/ValidationError/, done);
    });

    it('tenter de creer un user avec un mauvais email', (done) => {
      request(server)
        .post('/api/user' , {json: true, body: {}})
        .send({
          username: 'olivier',
          email: 'olivier',
          password: 'olivier'
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(400)
        .expect(/ValidationError/, done);
    });

    it('tenter de creer un user sans data', (done) => {
      request(server)
        .post('/api/user')
        .send({
          username: 'olivier',
          email: 'olivier@mail.com',
          password: 'olivier'
        })
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, done);
    });


  });




});