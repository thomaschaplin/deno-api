# Deno API

This repository contains the source code for an API written in pure TypeScript running on [Deno](https://deno.land/).

Using the below [Deno](https://deno.land/) modules within this application.

* [deno_mongo](https://deno.land/x/mongo)
* [djwt](https://deno.land/x/djwt)
* [oak](https://deno.land/x/oak)
* [testing](https://deno.land/std/testing)

## Installation

You will need to install the following on your machine.

#### Deno

Instructions on how to install deno can be found [here](https://deno.land/#installation)

#### MongoDB

Instructions on how to install mongodb can be found [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

## Running the API

#### Run MongoDB Community Edition

```
brew services start mongodb-community@4.2
```


#### Download Cache

```
./scripts/setup.ts
```

#### Run Deno

```
./scripts/start.ts
```

## Running the tests

Ensure the API is running, you should see `Listening on port: 4000` in the terminal.

#### Run Deno Test

```
./scripts/test.ts
```

## Developer Notes

#### Create lock file

```
./scripts/lock.ts
```
