'use strict';
const { expect } = require('chai');
const { health } = require('../../../src/controller');
const express = require('express');
const request = require('supertest');
const app = express();

describe('GET /health', () => {

    app.use("/health", health);

    it('should return json health', async () => {
        const result = await request(app).get('/health');

        expect(result.status).to.equal(200);
    });
});