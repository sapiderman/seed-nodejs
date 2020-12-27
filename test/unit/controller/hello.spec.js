'use strict';
const { expect } = require('chai');
const { hello, bye } = require('../../../src/controller');
const path = require('path');
const express = require('express');
const request = require('supertest');
const app = express();


describe('GET /hello /bye ', () => {

    app.use("/v1/hello", hello);
    app.use("/v1/bye", bye);
    app.set('views', path.join(__dirname, '../../../src/views'));
    app.set('view engine', 'pug');

    it('should render a hello page', async () => {
        const result = await request(app).get('/v1/hello');
        expect(result.status).to.equal(200);
        expect(result.res.text).not.empty;  // check the renders exist
    });

    it('should render a bye page', async () => {
        const result = await request(app).get('/v1/bye');
        expect(result.status).to.equal(200);
        expect(result.res.text).not.empty;  // check the renders exist
    });

});