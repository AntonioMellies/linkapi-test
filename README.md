# linkapi-test

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Tech

This project uses a number of open source projects to work properly:

* [NodeJs]
* [MongoDB]
* [Pipedrive]
* [Bling]

### Installation

Requires [Node.js](https://nodejs.org/).

Install the dependencies and devDependencies and start the server.

```sh
$ cd linkapi-test
$ npm install -d
```

### Development

Open your favorite Terminal and run these commands.

To run application:
```nodejs 
npm run start
```

### JOBS
The integration between the platforms runs according to a certain scheduling period.
This is done via the environment variable.

### Endpoint 

You can search for opportunities by doing a GET http://localhost:3335/api/v1/opportunities 

Note: Standard port, prefix and version, if you have changed the environment variables, it is necessary to change the request

### Environment variables

To simplify the execution of the evaluation, all variables are redundant in the code.
If you want to change any integration, the list of variables is this: 

SERVER_PORT
SERVER_VERSION
SERVER_PREFIX 

DATABASE_URI

JOBS_PEDIDO_INTEGRATE_CRON

PIPEDRIVE_COMPANY_DOMAIN 
PIPEDRIVE_API_TOKEN 

BLING_URL 
BLING_API_KEY


