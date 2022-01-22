# 🐚 Shell DB  

> Simple to use JSON database  🐚


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
- Interact with data on Shell DB efficiently including creating, reading, updating, and deleting __(CRUD)__

## Install

```sh
npm i shell-json-db
```

## Example

```
const {Jdb} = require('shell-json-db');

const db=new Jdb('db')
const users=db.createCollection('users');
users.save({});

```
## API


## Methods

const users=db.createCollection('users');

users.find()

find method used to fetch 

__users.save()__  method allows you to insert one or more document into a collection.

users.delete({_id:'id'})

users.deleteAll()


## Limits

It is possible to experience performance issues when you have JavaScript objects larger than 10MB. When you call save(), the entire collection is serialized and written to storage.

ShellDb is recommended for low-load use cases and POC work. We recommend MongoDB for higher loads