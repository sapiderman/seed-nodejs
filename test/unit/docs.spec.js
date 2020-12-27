'use strict';
const chai = require('chai');
const { expect } = chai;
const express = require('express');
const request = require('supertest');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc= require('../../swagger-docs.json');
const app = express();

describe('GET /docs',  () => {

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    it('it should return swagger render', async () => {
        const result = await request(app).get('/docs');
        expect(result.status).to.equal(301);
        expect(result.res.text).not.empty;  // check the renders exist
    });

});