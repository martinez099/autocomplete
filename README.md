# autocomplete
This demonstrates an auto-complete function using Redis sorted sets.

It assumes a running Redis instance on localhost:6379.

## Prerequisites
- Node.js including npm

## Setup
- ```npm install```

## Run
- ```npm start```

## Test

add some pharses:
- go to localhost:3000/add?p=Martin
- go to localhost:3000/add?p=Markus
- go to localhost:3000/add?p=Mario

get suggestions:
- go to localhost:3000/suggest?p=Mar
- go to localhost:3000/suggest?p=Mari
- go to localhost:3000/suggest?p=Mart
