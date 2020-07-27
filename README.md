# covid_19

An hospital API for helping doctors.

## Installation

Clone the [repo](https://github.com/rockingatgithub/covid_19).

Open terminal in project directory and run below command in terminal or cmd.
```bash
 npm install
 npm start
```

## Usage

Use Postman for fetching data through API.
go through the routes folders for different routes.

You need to register with  'http://localhost:8000/api/v1/doctors/register'
Give name, email, password and confirm_password form field to register.

### Access token

To generate access token goto 'http://localhost:8000/api/v1/doctors/login2' route.
Give email and password as form field to generate token.

### Note:-
> You need to use this token as 'Authorization' : Bearer 'token' as header.
> Keep generating new token every 100 seconds you can change this time in 
> config jwt_strategy file.

## Routes

- Patients routes
    - http://localhost:8000/api/v1/patients/register , give name and  phoneNumber form field to register.
    - http://localhost:8000/api/v1/patients/all_reports/:id , replace id from patient object id from the mongodb database.

- Reports routes
    -  http://localhost:8000/api/v1/reports/allStatus/:status , replace status with valid status.
    -  For valid status check models directory for reports schema.
    -  http://localhost:8000/api/v1/reports/newReport , give  date and status form field to generate new report.

## Testing API

To test the api using mocha and chai run following command instead.
Test codes are in test directory.

```bash
 npm run test
```

## Contributing 

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.