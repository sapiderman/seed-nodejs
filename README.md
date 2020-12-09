# Nodejs Express Seed

Small starter project to play around with golang features, github actions and various pipelines.  
Some experiments with bootstraps and template engines.

## Features

| Features          | Description                                                                       |  
| :---------------- | :-----------------------------------------------------------:                     |  
| express           | [express framework](https://expressjs.com/)                                       |  
| winston           | [logging library](https://github.com/winstonjs/winston)                           |  
| express-winston   | [express winston](https://github.com/bithavoc/express-winston)                    |  
| swagger api       | [API documentations using swagger swagger.io](https://swagger.io/specification/)  |  
| pug template      | [pug template engline](https://pugjs.org/api/getting-started.html)                |  
| bootstrap         | [bootstrap framework](https://getbootstrap.com/)                                  |  
| | |  

## todo

- circuit breaker
- database interface

## build  

```bash
npm ci
```  

## run  

```bash  
npm start

or  

npm run dev
```

## test  

Testing framework is using mocha and chai

```bash
npm run test
```

## some docs  

[license](./LICENSE)  
[code of conduct](./code_of_conduct.md)  

## project structure

├── node_modules  
├── src  
│   ├── bin  
│   ├── config  
│   ├── controller  
│   ├── middleware  
│   ├── public  
│   ├── routes  
│   ├── service  
│   ├── utils  
│   └── views  
└── test  
    └── bin   

## integrations  

| Services                      | Status                                                                       |  
| :-----------------------------| :-----------------------------------------------------------:                     |  
| [azure](dev.azure.com)        | [![Build Status](https://dev.azure.com/sapiderman/seed-nodejs/_apis/build/status/sapiderman.seed-nodejs?repoName=sapiderman%2Fseed-nodejs&branchName=main)](https://dev.azure.com/sapiderman/seed-nodejs/_build/latest?definitionId=8&repoName=sapiderman%2Fseed-nodejs&branchName=main) |  
|               |                            |  
|               |                           |


---
fork. clone. contribute and share!  
