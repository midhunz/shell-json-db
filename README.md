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

__Create DB__

Shell DB must be created before working with it. For that use the __Constructor__ method with the database name.
```
    const db=new Jdb('db_name','path')
```
This will create a directory with the database name in the path given, path is not mandatory by default, will create the same place

__Create Collection__

Collections are groups of JSON Objects. The objects within a collection may have different fields. In a relational database system, a collection is equivalent to a table. It exists within the database.

```
    const users=db.createCollection('users');
```

When creating a collection, if there are no objects to save, then the files should be created only if an insert happens

__save()__  method allows you to insert one or more document into a collection.

```
    collection.save({name:'John'})

```

example

```
    const users=db.createCollection('users');
    users.save({name:'John'})
```

One object will be saved inside the collection after running save() ,ShellDB will add the _id field and generate a unique identifier for it before inserting.

Insert many

```
    users.save([{name:'John'},{name:'Mary'}])
```
__find()__

The __find()__ method searches for JSON Objects that satisfy a given condition and returns the matching documents.


Syntax

    collection.find({})

Example 
```
    users.save({name:'John'})

    {
        _id:'TB1gd6-DbOM6lpg4YG8oJ'
        name:'john'
    }
```

Note : Currently, Find() does not support complex or multiple conditions. It only supports searching a single field.

users.delete({_id:'id'})

users.deleteAll()


## Limits

It is possible to experience performance issues when you have JavaScript objects larger than 10MB. When you call save(), the entire collection is serialized and written to storage.

ShellDb is recommended for low-load use cases and POC work. We recommend MongoDB for higher loads