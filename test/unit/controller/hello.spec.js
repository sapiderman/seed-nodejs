'use strict';

import chai from 'chai';
import express from 'express';
import request from 'supertest';
import path from 'path';
import { hello, bye } from '../../../src/controller/index.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const expect = chai.expect;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));


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