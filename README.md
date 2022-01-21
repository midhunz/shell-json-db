# Cova DB

> Simple to use JSON database 🦉


```
//Create Databse
const db=new Jdb('db')

//Create collection
const users=db.createCollection('users');

//saving collection
users.save({});
```

## Features

- __Lightweight__
- __Minimalist__ and easy to learn API
- Query and modify data using __plain JS__
- Atomic write

## Install

```sh
npm install lowdb
```

## Example

```
const {Jdb} = require('cova-json-db');

const db=new Jdb('db')
const users=db.createCollection('users');
users.save({});

```
## API


## Methods



## Limits

It is possible to experience performance issues when you have JavaScript objects larger than 10MB. When you call save(), the entire collection is serialized and written to storage.

CovaDB is recommended for low-load use cases and POC work. We recommend MongoDB for higher loads