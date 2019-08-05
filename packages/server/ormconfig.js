module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'secret',
  database: 'postgres',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: false,
  entities: ['build/entity/**/*.js'],
  migrations: ['build/migration/**/*.js'],
  subscribers: ['build/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'build/entity',
    migrationsDir: 'build/migration',
    subscribersDir: 'build/subscriber',
  },
};
