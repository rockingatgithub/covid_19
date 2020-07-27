// ======================acquiring chai and other libraries======================


const chai = require('chai');
const should = require('should');
const chaiHttp = require('chai-http')
const server = require('../index');
const { expect } = require('chai');
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjFkMzM0MDEyM2M3YzE0NzhjZjE3MjciLCJuYW1lIjoic3VkaGVuZHJhIiwiZW1haWwiOiJjeWJlcmtpbmdzaWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0IiwiY3JlYXRlZEF0IjoiMjAyMC0wNy0yNlQwNzozOTo0NC4yODBaIiwidXBkYXRlZEF0IjoiMjAyMC0wNy0yNlQwNzozOTo0NC4yODBaIiwiX192IjowLCJpYXQiOjE1OTU4NTAwMTgsImV4cCI6MTU5NTg1MTAxOH0.rhZM4AwsRW560xwKQOZSk6GpBNcjbx8gJkbfyhkHj8o';
chai.use(chaiHttp);


// ======================================checking the required routes first is patients register=======================



describe('Hospital_api', () => {
    it('it should register the patients',  async () => {
       const response = await chai.request('http://localhost:8000')
            .post('/api/v1/patients/register')
            .query({docid : '5f1d3340123c7c1478cf1727'})
            .type('form')
            .send({
                '_method': 'post',
                'name': 'raja',
                'email': 'api@test.com',
                'phoneNumber': '9007546392',
            })
            .set({ "Authorization": `Bearer ${token}` });
        expect(response).to.have.status(200);
        expect(response.body.message).to.equals('patient successfully registered');
        expect(response.body.patient).to.be.a('object');
      });
    
}
)


// =====================================checking the new reports ==================================


describe('Hospital_api', () => {
    it('it should create a new report',  async () => {
       const response = await chai.request('http://localhost:8000')
            .post('/api/v1/reports/newReport')
            .query({id : '5f1d35d9123c7c1478cf1729', docid : '5f1d3340123c7c1478cf1727'})
            .type('form')
            .send({
                '_method': 'post',
                'date': 'Mon Jul 27 2020 00:50:56 GMT+0530 (India Standard Time)',
                'status': 'Travelled-Quarantine',
            })
            .set({ "Authorization": `Bearer ${token}` });
        expect(response).to.have.status(200);
        expect(response.body.message).to.equals('report successfully created');
        expect(response.body.report).to.be.a('object');
      });
    
}
)


// ==================================testing the all reports route in patients=====================================


describe('Hospital_api', () => {
    it('it should GET all the reports of a patient',  async () => {
       const response = await chai.request('http://localhost:8000')
            .get('/api/v1/patients/all_reports/5f1d35d9123c7c1478cf1729')
            .set({ "Authorization": `Bearer ${token}` });
        expect(response).to.have.status(200);
        expect(response.body.message).to.equals('all report for patient');
        expect(response.body.reports).to.be.a('array');
      });
    
}
)

