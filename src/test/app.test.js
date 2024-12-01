import request from 'supertest';
import { expect } from 'chai';
import app from '../main.js';


describe('API Anime funcionando', () => {
    describe('El servidor está arriba', () => {
        it('deberia iniciar el servidor sin problemas', (done) => {
            request(app)
                .get('/')
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res.status).to.equal(404);
                    done()
                });
        });
    });
});


