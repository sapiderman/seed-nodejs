'use strict';

import chai from 'chai';
import express, { json } from 'express';
import request from 'superagent';
import sinon from 'sinon';
import getTime from '../../../src/controller/getTime.js';
const expect = chai.expect;
const app = express();

describe('GET /v1/time', () => {

    app.use("/v1/time", getTime);

    it('should return current time', async () => {

        const reqstub = sinon.stub(request, 'get');
        reqstub.returns({ body: 'horaaay', status: 200 });

        const result = request.get('/v1/time');
        console.log('test: ', result.body);
        expect(result.status).to.equal(200);
        expect(reqstub.calledOnce).to.be.true;

    });
});