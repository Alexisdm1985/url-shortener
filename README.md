# Url shortener excercise

## Table of content
1. [Description](#description)
2. [Features](#features)
    * [Future features](#future-features)
3. [How to run](#how-to-run)
    * [Install dependencies and set .env](#Install-dependencies-and-set-.env)
    * [Dependencies](#dependencies)
    * [Dev dependencies](#dev-dependencies)
4. [Code](#code)
5. [Credits](#credits)

***

## Description

I've followed a [This bLuuweb tutorial](https://www.youtube.com/watch?v=xkHyM-K3Cd8&t=9847s&ab_channel=Bluuweb) to make an
url shortener excercise with and `express` server that can be store data on `MongoDB`.

***

## Features

- Store url on a database
- Edit any stored url
- Copy an url to get the shorted url

### Future features

- Add an auth system to logIn/Out with username/email and password
- Assign user permissions

***

## How to run

### Install dependencies and set .env

```sh
$ npm install
```

Create and set the .env with the port and mongo_uri

```
MONGO_URI= //mondoDB link connection here
PORT= //Choose any port, if you don't set this, it will be run at port 3001
```

Run the app with ```$ npm run dev```

### Dependencies

- [dotenv 16](https://www.npmjs.com/package/dotenv)
- [express 4.18](https://expressjs.com/es/)
- [express-handlebars 7.0](https://www.npmjs.com/package/express-handlebars)
- [mongoose 7.0](https://mongoosejs.com/)
- [nanoid 3.0](https://www.npmjs.com/package/nanoid)

### Dev dependencies

- [Nodemon](https://www.npmjs.com/package/nodemon)

***

## Credits
1.  [Bluuweb Channel](https://www.youtube.com/channel/UCH7IANkyEcsVW_y1IlpkamQ)
