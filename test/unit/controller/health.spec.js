'use strict';
const chai = require('chai');
const { expect } = chai;
const { health } = require('../../../src/controller');
const express = require('express');
const request = require('supertest');
const app = express();

describe('GET /health', () => {

    const healthSchema = {
        title: 'Health schema',
        type: 'object',
        required: ['ok', 'health', 'name', 'version', 'timestamp', 'osUpTime', 'freemem', 'checks'],
        properties: {
            ok: {
                type: 'boolean',                
            },
            health: {
                type: 'string',
            },
            name: { type: 'string' },
            version: { type: 'string' },
            timestamp: { type: 'number' },
            osUpTime: { type: 'number' },
            freemem: { type: 'string' },
            checks: { type: 'array' },
        },
    }
   
    app.use("/health", health);
    chai.use(require('chai-json-schema'));

    it('should return json health', async () => {
        const result = await request(app).get('/health');

        expect(result.status).to.equal(200);              
        expect(result.body.ok).to.be.true;
        expect(result.body.health).to.eql('ALIVE!');
        expect(result.body).to.be.jsonSchema(healthSchema); 
    });
});