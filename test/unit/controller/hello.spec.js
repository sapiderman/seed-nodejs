'use strict';
const { expect } = require('chai');
const { hello } = require('../../../src/controller');
const path = require('path');
const express = require('express');
const request = require('supertest');
const app = express();


describe('GET /hello', () => {

    app.use("/v1/hello", hello);
    app.set('views', path.join(__dirname, '../../../src/views'));
    app.set('view engine', 'pug');


    it('should return json health', async () => {
        const result = await request(app).get('/v1/hello');
        expect(result.status).to.equal(200);
    });
});