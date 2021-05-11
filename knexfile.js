'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '30918',
      database: 'form_manager',
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/test',
    },
  },
  ci: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_PORT,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/test',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/prod',
    },
  },
};
