module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: process.env.DATABASE_HOST,
        srv: true,
        port: 27017,
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      },
      options: {
        authenticationDatabase: process.env.AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
