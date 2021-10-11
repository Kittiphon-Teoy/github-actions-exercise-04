const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    it('61160086', (done) => {
        request(app).get('/').expect('61160086', done)
    })
})