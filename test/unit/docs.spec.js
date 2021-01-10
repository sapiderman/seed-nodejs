'use strict';

import chai from 'chai';
import express from 'express';
import request from 'supertest';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../../swagger-docs.json';

const expect = chai.expect;
const app = express();



describe('GET /docs',  () => {

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    it('it should return swagger render', async () => {
        const result = await request(app).get('/docs');
        expect(result.status).to.equal(301);
        expect(result.res.text).not.empty;  // check the renders exist
    });

});