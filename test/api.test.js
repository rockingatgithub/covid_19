// ======================acquiring chai and other libraries======================


const chai = require('chai');
const chaiHttp = require('chai-http')
const server = require('../index');
const { expect } = require('chai');
let token = '';  //provide access token by using doctor login route with postman and any other tool 
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

