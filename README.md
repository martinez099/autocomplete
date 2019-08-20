# ratelimiter
This demonstrates an auto-complete using Redis sorted sets.

It assumes a running Redis instance on localhost:6379.

## Prerequisites
- Node.js including npm

## Setup
```npm install```

## Run
```npm start```

## Test

Go to localhost:3000/add?p=Martin
Go to localhost:3000/add?p=Markus
Go to localhost:3000/add?p=Mario

Go to localhost:3000/suggest?p=Mar
Go to localhost:3000/suggest?p=Mari
Go to localhost:3000/suggest?p=Mart
